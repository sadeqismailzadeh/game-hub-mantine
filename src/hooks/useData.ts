// ============================================================================
// hooks/useData.ts — A REUSABLE "FETCH A LIST OF THINGS" CUSTOM HOOK
// ============================================================================
// This is the most important file to understand in the whole project. It's
// a GENERIC custom hook that knows how to:
//   1. Call any GET endpoint on our API
//   2. Track loading / error / data state while the request is in flight
//   3. Cancel the request if the component unmounts (or deps change) before
//      it finishes, to avoid "setting state on an unmounted component"
//
// A "custom hook" is just a normal function whose name starts with `use`
// and which is allowed to call OTHER hooks (useState, useEffect, etc.)
// inside it. React enforces the `use` naming convention so it — and other
// developers — can tell which functions follow the Rules of Hooks.
// ============================================================================

import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

// ----------------------------------------------------------------------------
// <T> — this is a TypeScript GENERIC.
// ----------------------------------------------------------------------------
// Think of `T` as a placeholder type that gets filled in by whoever CALLS
// this hook. For example, `useData<Game>("/games")` fills T with `Game`, so
// TypeScript knows `data` will be a `Game[]` (array of Game objects), and
// you get autocomplete + type-checking on every game you loop over later.
// Without generics we'd have to write a near-identical useData for every
// different kind of data (games, genres, platforms, ...).
//
// The FreeToGame API returns a plain JSON array for its list endpoints
// (unlike RAWG's { count, results } wrapper), so useData works with T[]
// directly.
const useData = <T>(
  endpoint: string, // e.g. "/games" — appended to apiClient's baseURL
  requestConfig?: AxiosRequestConfig, // optional axios options (params, etc)
  deps?: unknown[] // optional list of values that should trigger a re-fetch
) => {
  // Three independent pieces of state describing the request's lifecycle:
  const [data, setData] = useState<T[]>([]); // the results, once loaded
  const [error, setError] = useState(""); // an error message, if any
  const [isLoading, setLoading] = useState(false); // is a request in flight?

  // --------------------------------------------------------------------
  // useEffect — runs SIDE EFFECTS (like network requests) in response to
  // changes, AFTER React has rendered/updated the DOM.
  // --------------------------------------------------------------------
  useEffect(
    () => {
      // AbortController is a built-in browser API for CANCELING an
      // in-progress fetch/axios request. We create a fresh one every time
      // this effect runs.
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<T[]>(endpoint, {
          signal: controller.signal, // ties this request to our controller
          ...requestConfig, // spreads in any extra options (like `params`)
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          // If the request was cancelled on purpose (see the cleanup
          // function below), axios throws a CanceledError. That's not a
          // real error the user needs to see, so we silently ignore it.
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      // ----------------------------------------------------------------
      // THE CLEANUP FUNCTION — the function returned FROM inside useEffect.
      // ----------------------------------------------------------------
      // React calls this automatically:
      //   (a) right before the effect runs again (e.g. deps changed), and
      //   (b) when the component using this hook unmounts.
      // Here it aborts whatever request is still in flight, preventing a
      // slow, stale request from overwriting fresher data later, and
      // preventing "can't update state on an unmounted component" warnings.
      return () => controller.abort();

      // We intentionally do NOT list `endpoint` or `requestConfig` in the
      // dependency array below — the caller controls exactly when to
      // re-fetch via the `deps` parameter instead. This eslint-disable
      // silences the linter's warning about that deliberate choice.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    // The effect re-runs whenever any value inside `deps` changes (e.g.
    // [gameQuery.genre?.slug, gameQuery.platform?.slug, ...] in useGames).
    // If the caller doesn't pass `deps` at all, we fall back to `[]`,
    // meaning "run once, when the component first mounts, and never again."
    deps ? [...deps] : []
  );

  // Every component that calls useData gets back these three values and
  // decides for itself how to render loading/error/data states.
  return { data, error, isLoading };
};

export default useData;
