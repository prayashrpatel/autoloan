import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./calculator/page"; // <-- no .tsx

const root = createRoot(document.getElementById("root")!);
root.render(<Page />);
