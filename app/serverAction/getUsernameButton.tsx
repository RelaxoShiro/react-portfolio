"use client";

import { useState } from "react";

export default function getUsernameButton({
  getUsernameAction,
}: {
  getUsernameAction: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();
  return (
    <>
      <div>
        <button
          onClick={async () => {
            setName(await getUsernameAction());
          }}
        >
          Is User Here
        </button>
        {name && <div>You are {name}</div>}
      </div>
    </>
  );
}
