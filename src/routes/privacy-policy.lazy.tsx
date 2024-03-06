import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/privacy-policy')({
  component: PrivacyPolicy
})

function PrivacyPolicy() {
  return (<main> <h2 className="text-3xl text-center">Privacy Policy</h2> <p className="my-4 text-lg text-center">
    Your data always belongs to you, and only you. I don't collect or sell sensitive
    personal data.
  </p>
    <h3 className="my-2 text-lg text-center">Analytics</h3>
    <p>
      This site uses the open source <a className="underline" href="https://umami.is/">Umami Analytics</a> routed through a subdomain to count website visits, downloads, etc. To view the analytics collected
      <a className="underline" href="https://al.jacktheflap.com/share/1tochXDm/JackTheFlap-com">click here</a>. No cookies are used and no personal data—not even an IP address or browser user agent—is
      stored. For more information, see the <a className="underline" href="https://umami.is/privacy">Umami Data Policy.</a>
    </p>
    <h3 className="my-2 text-lg text-center">Projects</h3>
    <p>
      Projects may require varying levels of data to operate. For more information, check the
      privacy policies for that given project. Compound-interest-calculator is only executed on the users device. No data entered is collected or sent external to the users device.
    </p>
    <h3 className="my-2 text-lg text-center">Transparency</h3> <p>
      I have not placed any backdoors into my software and have not received any requests for
      doing so. I have also never received a National Security Letter, FISA order, or any other
      classified request for user information.
    </p>
  </main>)
}