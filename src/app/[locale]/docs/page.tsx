import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, CheckCircle, Terminal, Settings, AlertCircle, FileText, Download, Globe } from "lucide-react";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isId = locale === "id";

  const navProps = {
    locale,
    logo: "/logo.png",
    githubRepo: "Curzyori/float-volume",
    stars: 0,
    brandColor: "purple" as const,
  };

  return (
    <>
      <Navbar {...navProps} />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Float Volume Documentation</h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Introduction
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Float Volume is a privacy-friendly floating volume control application for Android.
              Most Android volume controls are either too intrusive, packed with ads, or visually
              disconnected from the system. Float Volume solves that with a lightweight floating
              control that stays accessible without breaking focus.
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              The main highlight is the <strong>transparent floating icon</strong>. It sits above
              your screen like a subtle assistive control, giving quick access to volume adjustment
              without opening system panels repeatedly.
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Features
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span><strong>Transparent Floating Icon</strong> — Subtle floating overlay icon that stays accessible without blocking the screen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span><strong>Volume Control Overlay</strong> — Quickly adjust Android volume from a floating interface</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span><strong>Ad-Free Experience</strong> — No ads, no tracking, no noisy monetization layer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span><strong>Privacy-Friendly</strong> — Designed as a local Android utility with minimal data exposure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span><strong>Material Design 3</strong> — Modern Android UI language with clean spacing and tactile controls</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span><strong>Prestige-Safe Stealth Aesthetic</strong> — Dark, minimal, premium visual direction for daily-use utility apps</span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6" />
              Installation
            </h2>
            <p className="text-foreground/70 mb-4">
              Download the latest APK from the GitHub releases page:
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-foreground/80">
                <a href="https://github.com/Curzyori/float-volume/releases" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                  https://github.com/Curzyori/float-volume/releases
                </a>
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Build from Source</h3>
            <div className="bg-secondary/50 rounded-lg p-4">
              <pre className="text-sm font-mono text-foreground/80 overflow-x-auto">
{`# Clone the repository
git clone https://github.com/Curzyori/float-volume.git
cd float-volume

# Build the APK
./gradlew assembleRelease`}
              </pre>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6" />
              Tech Stack
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li><strong>Platform:</strong> Android</li>
              <li><strong>Language:</strong> Kotlin</li>
              <li><strong>Build System:</strong> Gradle (Gradle Kotlin DSL)</li>
              <li><strong>Design:</strong> Material Design 3</li>
              <li><strong>UX Direction:</strong> Prestige-Safe Stealth Aesthetic</li>
              <li><strong>License:</strong> GPL-3.0</li>
            </ul>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6" />
              How It Works
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Float Volume creates a lightweight floating overlay that sits above other applications.
              When activated, it displays a minimal volume control interface that allows you to adjust
              system volume without navigating away from your current screen. The floating icon can be
              positioned anywhere on the screen and remains accessible while you use other apps.
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Troubleshooting
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">The floating icon is not visible</h3>
                <p className="text-foreground/70 text-sm">Make sure Float Volume has permission to display over other apps (Overlay permission). You can find this in Settings &gt; Apps &gt; Float Volume &gt; Permissions.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">Volume adjustments are not working</h3>
                <p className="text-foreground/70 text-sm">Ensure Float Volume has the necessary accessibility permissions. Some devices may require additional setup in your device&apos;s accessibility settings.</p>
              </div>
            </div>
          </section>

          {/* License */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              License
            </h2>
            <p className="text-foreground/70">
              This project is released under the <strong>GNU General Public License v3.0</strong>.
              See the LICENSE file for full text.
            </p>
          </section>
        </div>
      </main>

      <Footer copyright="© 2026 Curzyori" githubRepo="Curzyori/float-volume" />
    </>
  );
}
