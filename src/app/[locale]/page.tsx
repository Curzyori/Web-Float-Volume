import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { DownloadSection } from "@/components/DownloadSection";
import { Preview } from "@/components/Preview";
import { Shield, Volume2, Zap, Lock, Palette, Monitor } from "lucide-react";

async function getGitHubStars(repo: string): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count || 0;
  } catch {
    return 0;
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/float-volume");

  const navProps = {
    locale,
    logo: "/logo.png",
    name: "Float Volume",
    githubRepo: "Curzyori/float-volume",
    stars,
    brandColor: "purple" as const,
  };

  const heroProps = {
    logo: "/logo.png",
    name: "Float Volume",
    tagline: locale === "id" ? "Kontrol volume mengambang yang ramah privasi untuk Android" : "Privacy-friendly floating volume control for Android",
    brandColor: "purple" as const,
    ctaPrimary: locale === "id" ? "Unduh APK" : "Download APK",
    ctaSecondary: locale === "id" ? "Lihat di GitHub" : "View on GitHub",
    githubRepo: navProps.githubRepo,
    downloadUrl: "https://github.com/Curzyori/float-volume/releases/tag/V4.0.0",
  };

  const featuresProps = {
    title: locale === "id" ? "Fitur" : "Features",
    features: [
      {
        title: locale === "id" ? "Ikon Mengambang Transparan" : "Transparent Floating Icon",
        description: locale === "id"
          ? "Ikon overlay mengambang halus yang tetap dapat diakses tanpa memblokir layar."
          : "Subtle floating overlay icon that stays accessible without blocking the screen.",
        icon: Monitor,
      },
      {
        title: locale === "id" ? "Overlay Kontrol Volume" : "Volume Control Overlay",
        description: locale === "id"
          ? "Sesuaikan volume Android dengan cepat dari antarmuka mengambang."
          : "Quickly adjust Android volume from a floating interface.",
        icon: Volume2,
      },
      {
        title: locale === "id" ? "Bebas Iklan" : "Ad-Free Experience",
        description: locale === "id"
          ? "Tanpa iklan, tanpa pelacakan, tanpa lapisan monetisasi yang mengganggu."
          : "No ads, no tracking, no noisy monetization layer.",
        icon: Zap,
      },
      {
        title: locale === "id" ? "Ramah Privasi" : "Privacy-Friendly",
        description: locale === "id"
          ? "Dirancang sebagai utilitas Android lokal dengan paparan data minimal."
          : "Designed as a local Android utility with minimal data exposure.",
        icon: Lock,
      },
      {
        title: "Material Design 3",
        description: locale === "id"
          ? "Bahasa UI Android modern dengan jarak bersih dan kontrol haptic."
          : "Modern Android UI language with clean spacing and tactile controls.",
        icon: Palette,
      },
      {
        title: locale === "id" ? "Estetika Gelap" : "Dark Aesthetic",
        description: locale === "id"
          ? "Arah visual gelap, minimal, premium untuk aplikasi utilitas sehari-hari."
          : "Dark, minimal, premium visual direction for daily-use utility apps.",
        icon: Shield,
      },
    ],
    brandColor: "purple" as const,
  };

  const installationProps = {
    title: locale === "id" ? "Instalasi" : "Installation",
    subtitle: locale === "id" ? "Build dari Source" : "Build from Source",
    code: "git clone https://github.com/Curzyori/float-volume.git\ncd float-volume\n./gradlew assembleRelease",
    brandColor: "purple" as const,
  };

  const downloadProps = {
    title: locale === "id" ? "Unduh" : "Download",
    latestVersion: "v4.0.0",
    versionLabel: locale === "id" ? "Versi Terbaru" : "Latest Version",
    files: [
      { name: "Float-Volume-v4.0.0.apk", url: "https://github.com/Curzyori/float-volume/releases/download/V4.0.0/Float-Volume-v4.0.0.apk" },
      { name: "Float-Volume-v3.2.0.apk", url: "https://github.com/Curzyori/float-volume/releases/download/V3.2.0/Float-Volume-v3.2.0.apk" },
      { name: "Float-Volume-v3.1.0.apk", url: "https://github.com/Curzyori/float-volume/releases/download/V3.1.0/Float-Volume-v3.1.0.apk" },
      { name: "Float-Volume-v3.0.0.apk", url: "https://github.com/Curzyori/float-volume/releases/download/V3.0.0/Float-Volume-v3.0.0.apk" },
      { name: "Float-Volume-v2.0.0.apk", url: "https://github.com/Curzyori/float-volume/releases/download/V2.0.0/Float-Volume-v2.0.0.apk" },
    ],
    sourceCodeLabel: "Source Code",
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
    copyright: "© 2026 Curzyori",
    githubRepo: navProps.githubRepo,
    licenseName: "GPL-3.0",
    licenseUrl: "https://github.com/Curzyori/float-volume/blob/main/LICENSE",
  };

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:font-medium focus:shadow-lg"
      >
        {locale === "id" ? "Lewati ke konten utama" : "Skip to main content"}
      </a>

      <Navbar {...navProps} />
      <main id="main-content">
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Installation {...installationProps} />
      <Preview {...previewProps} />
      <DownloadSection {...downloadProps} />
      </main>
      <Footer copyright="© 2026 Curzyori" githubRepo="Curzyori/float-volume" />
    </>
  );
}
