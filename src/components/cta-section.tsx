import type { CSSProperties } from "react";
import { Container, Button, Eyebrow, Rich, Watermark } from "@/components/ui";

/** The recurring navy call-to-action banner that closes most pages. */
export function CTASection({
  eyebrow = "Ready?",
  heading,
  primary,
  secondary,
  maxCh = 20,
  headingSize = "clamp(34px,4.4vw,60px)",
  className,
}: {
  eyebrow?: string;
  heading: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  maxCh?: number;
  headingSize?: string;
  className?: string;
}) {
  return (
    <section className={className ?? "pb-[104px]"}>
      <Container>
        <div className="relative overflow-hidden rounded-[22px] bg-navy px-10 py-[clamp(48px,7vw,100px)] text-center">
          <Watermark
            size={560}
            className="-right-[150px] -bottom-[170px]"
          />
          <div className="relative">
            <Eyebrow tone="gold" className="tracking-[0.18em]">
              {eyebrow}
            </Eyebrow>
            <Rich
              as="h2"
              tone="dark"
              html={heading}
              className="mx-auto mt-6 font-extrabold tracking-[-0.025em] text-white"
              style={
                {
                  maxWidth: `${maxCh}ch`,
                  fontSize: headingSize,
                  lineHeight: 1.08,
                } as CSSProperties
              }
            />
            <div className="mt-[38px] flex flex-wrap justify-center gap-[14px]">
              <Button href={primary.href} variant="solidLight" arrow>
                {primary.label}
              </Button>
              {secondary ? (
                <Button href={secondary.href} variant="outlineLight">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
