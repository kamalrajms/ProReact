import React, { useActionState } from "react";

export default function UseActionStateHook() {
  async function saveuser(PreviousState, formData) {
    try {
      const name = formData.get("name");

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!name) throw new Error("Name is required");
      return { success: true, message: `saved ${name}` };
    } catch (err) {
      return { success: false, message: `you did some error ${err.message}` };
    }
  }
  const [state, formAction, IsPending] = useActionState(saveuser, {
    success: false,
    message: "",
  });
  return (
    <div>
      UseActionState
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter name" />
        <button disabled={IsPending}>{IsPending ? "saving" : "save"}</button>
        {state.message && <p>{state.message}</p>}
      </form>
    </div>
  );
}
