import { Metadata } from "next";
import {
  FONT_HEADING,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_FAINT,
  COLOR_LINK,
} from "@/app/lib/tokens";

export const metadata: Metadata = {
  title: "Careers — Leo Mishin",
  description:
    "Join an ecosystem of new-money digital businesses. We're looking for potential entrepreneurs.",
};

const TEXT_COLOR = "rgba(0, 0, 0, 0.72)";

const bodyWrap: React.CSSProperties = {
  fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
  fontSize: 16,
  letterSpacing: "-0.01em",
  lineHeight: "1.7em",
  color: TEXT_COLOR,
  width: "100%",
};

const para: React.CSSProperties = { margin: "0 0 18px" };
const paraLast: React.CSSProperties = { margin: 0 };

const sectionHeading: React.CSSProperties = {
  fontFamily: "var(--font-eb-garamond), 'EB Garamond', ui-serif, Georgia, serif",
  fontSize: 22,
  fontWeight: 600,
  letterSpacing: "-0.02em",
  lineHeight: "1.5em",
  color: COLOR_PRIMARY,
  margin: "0 0 10px",
};

export default function CareersPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "128px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* ── Heading ── */}
        <p
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            color: COLOR_PRIMARY,
            margin: "0 0 16px",
          }}
        >
          Careers
        </p>

        {/* ── Intro ── */}
        <div style={bodyWrap}>
          <p style={paraLast}>
            I&apos;m not building a traditional company. I&apos;m building an
            ecosystem of new-money digital businesses — and I&apos;m looking for
            the right people to build it with me.
          </p>
        </div>

        {/* ── Who I'm Looking For ── */}
        <div style={{ width: "100%", marginTop: 40 }}>
          <p style={sectionHeading}>Who I&apos;m Looking For</p>
          <div style={bodyWrap}>
            <p style={para}>I don&apos;t hire based on r&eacute;sum&eacute;s. I hire based on values, vision, and vibe.</p>
            <p style={para}>I&apos;m looking for potential entrepreneurs. Young, hungry people who see work as a craft, not a clock-in situation. You&apos;re hardworking not because someone&apos;s watching, but because you can&apos;t operate any other way.</p>
            <p style={para}>You&apos;re respectful. You&apos;re bright. You&apos;re honest. You&apos;re a good person who understands that character matters as much as competence.</p>
            <p style={paraLast}>If you&apos;re the type who wants to learn how businesses actually scale, who wants to be in the room where real decisions get made, who wants to build something that matters — not just collect a paycheck — then keep reading.</p>
          </div>
        </div>

        {/* ── What you'll get from me ── */}
        <div style={{ width: "100%", marginTop: 40 }}>
          <p style={sectionHeading}>What you&apos;ll get from me</p>
          <div style={bodyWrap}>
            <p style={para}>I&apos;m the #1 most caring leader you can team up with.</p>
            <p style={para}>Here&apos;s what that actually means: if you honestly try, if you do your best, if you show up with integrity and effort — I will make sure you get everything possible in return. Knowledge, opportunities, resources, support, growth — whatever you need to win, you&apos;ll get it from me.</p>
            <p style={para}>I appreciate hard work and genuine effort more than almost anything else, and when I see it, I give back tenfold. This isn&apos;t a transactional workplace. We&apos;re one big family, and I take care of my people.</p>
            <p style={paraLast}>This isn&apos;t lip service. It&apos;s how I operate. Because I know that the best teams are built when everyone genuinely looks out for each other and wins together.</p>
          </div>
        </div>

        {/* ── What I'm building ── */}
        <div style={{ width: "100%", marginTop: 40 }}>
          <p style={sectionHeading}>What I&apos;m building</p>
          <div style={bodyWrap}>
            <p style={para}>An ecosystem of new-money digital businesses — rich on cashflow, high in enterprise value, and built to scale without breaking.</p>
            <p style={para}>We&apos;re operating across multiple ventures:</p>
            <p style={{ margin: "0 0 4px" }}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>Iolipay</span> — Legal tech startup reshaping payments and compliance</p>
            <p style={para}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>ScaleWContent</span> — B2B YouTube agency turning content into client acquisition systems</p>
            <p style={paraLast}>You won&apos;t be a cog in a machine here. You&apos;ll be building the machine.</p>
          </div>
        </div>

        {/* ── What I value ── */}
        <div style={{ width: "100%", marginTop: 40 }}>
          <p style={sectionHeading}>What I value in people</p>
          <div style={bodyWrap}>
            <p style={para}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>Speed</span> — We move fast. Opportunities don&apos;t wait, and neither do we.</p>
            <p style={para}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>Execution</span> — Ideas are worthless without implementation. We build, we test, we iterate, we scale.</p>
            <p style={para}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>Integrity</span> — Your word is everything. If you say you&apos;ll do it, you do it. No excuses, no flaking, no politics.</p>
            <p style={para}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>Hard Work</span> — There are no shortcuts to building something real. We put in the work.</p>
            <p style={para}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>Honesty</span> — We operate with transparency and truth. No games, no politics, no hidden agendas.</p>
            <p style={paraLast}><span style={{ color: COLOR_PRIMARY, fontWeight: 500 }}>Brilliance of the Mind</span> — Sharp thinking, creative problem-solving, and intellectual curiosity. We value people who think deeply and differently.</p>
          </div>
        </div>

        {/* ── Video ── */}
        <div style={{ width: "100%", aspectRatio: "651 / 501", overflow: "hidden", marginTop: 32, borderRadius: 2 }}>
          <video
            src="/videos/careers.mp4"
            autoPlay muted loop playsInline
            style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </div>

        {/* ── Footer ── */}
        <p
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            textAlign: "center",
            color: COLOR_FAINT,
            width: "100%",
            margin: "32px 0 0",
          }}
        >
          &copy; Leonid Mishin 2026
        </p>
      </div>
    </div>
  );
}
