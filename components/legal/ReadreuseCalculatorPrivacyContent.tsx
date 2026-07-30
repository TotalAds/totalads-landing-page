import {
  LEGAL_URLS,
  READREUSE_CALCULATOR,
} from "@/lib/legal";

export default function ReadreuseCalculatorPrivacyContent() {
  const {
    appName,
    packageName,
    developerName,
    contactEmail,
    contactPhone,
    jurisdiction,
  } = READREUSE_CALCULATOR;

  return (
    <>
      <p>
        This Privacy Policy applies solely to the mobile application{" "}
        <strong>{appName}</strong> (Android package name:{" "}
        <strong>{packageName}</strong>), available on the Google Play Store
        (the &quot;App&quot;).
      </p>

      <h2>1. Developer / legal entity</h2>
      <p>
        The App is developed, published, and operated by{" "}
        <strong>{developerName}</strong> (the &quot;Developer&quot;,
        &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), as listed on the
        Google Play store listing for {appName}. The Developer is based in{" "}
        {jurisdiction}.
      </p>
      <ul>
        <li>
          <strong>App name:</strong> {appName}
        </li>
        <li>
          <strong>Package name / application ID:</strong> {packageName}
        </li>
        <li>
          <strong>Developer name (Google Play):</strong> {developerName}
        </li>
        <li>
          <strong>Contact email:</strong>{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </li>
        <li>
          <strong>Contact phone:</strong>{" "}
          <a href={`tel:${contactPhone}`}>{contactPhone}</a>
        </li>
      </ul>
      <p>
        This policy is for {appName} only. It is separate from the privacy
        policy for LeadSnipper / SocialSnipper products, which is available at{" "}
        <a href={LEGAL_URLS.privacy}>{LEGAL_URLS.privacy}</a>.
      </p>

      <h2>2. Summary</h2>
      <p>
        {appName} is a free calculator app for everyday arithmetic and memory
        functions. We have designed the App to be private by default:
      </p>
      <ul>
        <li>
          The App does <strong>not collect</strong> personal or sensitive user
          data.
        </li>
        <li>
          The App does <strong>not share</strong> any user data with third
          parties.
        </li>
        <li>
          Calculations and any on-device history or preferences stay{" "}
          <strong>only on your device</strong>.
        </li>
        <li>
          The App does not require an account, login, or internet connection to
          perform calculations.
        </li>
      </ul>

      <h2>3. Information we collect</h2>
      <p>
        <strong>We do not collect personal information.</strong> {appName} does
        not ask for your name, email address, phone number, contacts, location,
        photos, files, or account credentials. There is no sign-in and no user
        profile.
      </p>
      <p>
        Numbers you enter, calculation results, and any optional local history
        or preferences are processed and stored only on your device. We do not
        transmit that information to our servers or to any third party.
      </p>

      <h2>4. How we use information</h2>
      <p>
        Because we do not collect personal data from the App, we do not use,
        analyze, or monetize user data. On-device calculation inputs and results
        are used only to provide the calculator features you request on your
        device.
      </p>

      <h2>5. Data sharing and sale</h2>
      <p>
        We do not sell, rent, or share personal information with third parties.
        The App does not include advertising SDKs, analytics SDKs, crash
        reporters that upload personal data, or social login providers.
      </p>

      <h2>6. Permissions</h2>
      <p>
        {appName} is intended to run without sensitive device permissions. If a
        future update requests a permission, it will be disclosed in the Google
        Play listing and this policy will be updated before that change takes
        effect for users who install or update the App.
      </p>

      <h2>7. Data retention and deletion</h2>
      <p>
        We do not retain App user data on our servers because we do not collect
        it. Any calculation history or preferences stored on your device remain
        there until you clear the App&apos;s data or uninstall the App.
      </p>

      <h2>8. Security</h2>
      <p>
        Because data stays on your device, security depends on your device
        protections (screen lock, OS updates, and device encryption). We do not
        operate backend servers that store {appName} user calculation data.
      </p>

      <h2>9. Children&apos;s privacy</h2>
      <p>
        The App does not knowingly collect personal information from children or
        anyone else. It is suitable for general audiences as described on Google
        Play. If you believe a child has provided personal information to us
        through another channel, contact us and we will delete it.
      </p>

      <h2>10. International users</h2>
      <p>
        The App is published from {jurisdiction}. Because we do not collect
        personal data through the App, we do not transfer App user personal data
        internationally. Rights under applicable laws (including GDPR and
        India&apos;s DPDP Act where relevant) can be exercised by contacting the
        Developer using the details below.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy if the App&apos;s practices change. We
        will revise the &quot;Last updated&quot; date on this page. Material
        changes that introduce data collection will be reflected here and in the
        Google Play Data safety section before those practices begin.
      </p>

      <h2>12. Contact</h2>
      <p>
        For privacy questions about <strong>{appName}</strong> (
        <strong>{packageName}</strong>), contact the Developer:
      </p>
      <ul>
        <li>
          <strong>Name:</strong> {developerName}
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${contactPhone}`}>{contactPhone}</a>
        </li>
        <li>
          <strong>Country:</strong> {jurisdiction}
        </li>
      </ul>
    </>
  );
}
