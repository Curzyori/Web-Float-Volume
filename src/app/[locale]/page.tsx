import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/messages";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { DownloadSection } from "@/components/DownloadSection";
import { Preview } from "@/components/Preview";
import { Shield, Volume2, Zap, Lock, Palette, Monitor } from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = getMessages();

  const navProps = {
    locale,
    messages,
    logo: "/logo.png",
    githubRepo: "Curzyori/float-volume",
    stars: 0, // Will be fetched at runtime
    brandColor: "purple" as const,
  };

  const heroProps = {
    logo: "/logo.png",
    name: "Float Volume",
    tagline: "Privacy-friendly floating volume control for Android",
    brandColor: "purple" as const,
    ctaPrimary: messages.hero.ctaPrimary,
    ctaSecondary: messages.hero.ctaSecondary,
    githubRepo: navProps.githubRepo,
    downloadUrl: "https://github.com/Curzyori/float-volume/releases/latest",
  };

  const featuresProps = {
    title: messages.features.title,
    features: [
      {
        title: "Transparent Floating Icon",
        description: "Subtle floating overlay icon that stays accessible without blocking the screen",
        icon: Monitor,
      },
      {
        title: "Volume Control Overlay",
        description: "Quickly adjust Android volume from a floating interface",
        icon: Volume2,
      },
      {
        title: "Ad-Free Experience",
        description: "No ads, no tracking, no noisy monetization layer",
        icon: Zap,
      },
      {
        title: "Privacy-Friendly",
        description: "Designed as a local Android utility with minimal data exposure",
        icon: Lock,
      },
      {
        title: "Material Design 3",
        description: "Modern Android UI language with clean spacing and tactile controls",
        icon: Palette,
      },
      {
        title: "Dark Aesthetic",
        description: "Dark, minimal, premium visual direction for daily-use utility apps",
        icon: Shield,
      },
    ],
    brandColor: "purple" as const,
  };

  const installationProps = {
    title: messages.installation.title,
    subtitle: messages.installation.subtitle,
    code: "git clone https://github.com/Curzyori/float-volume.git\ncd float-volume\n./gradlew assembleRelease",
    brandColor: "purple" as const,
  };

  const downloadProps = {
    title: messages.download.title,
    latestVersion: "v3.2.0",
    versionLabel: messages.download.latestVersion,
    files: [{ name: "Float-Volume-v3.2.0.apk", url: "https://github.com/Curzyori/float-volume/releases/download/v3.2.0/Float-Volume-v3.2.0.apk" }],
    sourceCodeLabel: messages.download.sourceCode,
    sourceUrl: "https://github.com/Curzyori/float-volume",
    githubRepo: navProps.githubRepo,
    brandColor: "purple" as const,
  };

  const previewProps = {
    images: [
      { src: "/images/dash1.jpg", alt: "Float Volume Dashboard" },
      { src: "/images/dash2.jpg", alt: "Float Volume Controls" },
    ],
  };

  const footerProps = {
    copyright: messages.footer.copyright,
    githubRepo: navProps.githubRepo,
  };

  return (
    <NextIntlClientProvider>
      <Navbar {...navProps} />
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Installation {...installationProps} />
      <Preview {...previewProps} />
      <DownloadSection {...downloadProps} />
      <Footer {...footerProps} />
    </NextIntlClientProvider>
  );
}
