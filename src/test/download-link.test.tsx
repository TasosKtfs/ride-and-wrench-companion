import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Index from "@/routes/index";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=gr.ridemind.app";

// The app is Android-only for now, so the download CTA must open the real store listing.
describe("Android download link", () => {
  it("opens the Google Play listing for gr.ridemind.app", () => {
    render(<Index />);

    const link = screen.getByRole("link", { name: /android/i });

    expect(link).toHaveAttribute("href", PLAY_STORE);
    expect(link).toHaveAttribute("target", "_blank");
  });
});
