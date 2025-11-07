import React, { useActionState, startTransition } from "react";

export default function UseactionEx2() {
  async function increment(prevCount) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return prevCount + 1;
  }
  const [count, incrementAction, isPending] = useActionState(increment, 0);
  return (
    <div>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          startTransition(() => incrementAction(count));
        }}
      >
        {isPending ? "loading..." : "increment"}
      </button>
    </div>
  );
}
