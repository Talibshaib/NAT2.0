import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#E8F1F7]">
      <div className="relative flex flex-col items-center justify-center p-6 py-10 space-y-4 w-screen min-h-[300px] bg-cover bg-center bg-gray-800 text-white">
        <h1 className="text-2xl font-bold md:text-4xl ">Privacy Policy</h1>
      </div>
      <div className="max-w-7xl md:w-1/2 mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          With whom may the information be shared?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Personally Identifiable Information about Authorized Customers may be
          shared with other Authorized Customers who wish to evaluate potential
          transactions with them. We may share aggregated information about our
          Visitors, including the demographics of our Visitors and Authorized
          Customers, with our affiliated agencies and third-party vendors.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          How is Personally Identifiable Information stored?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Personally Identifiable Information collected by DM Solution Hub is
          securely stored and is not accessible to third parties or employees of
          DM Solution Hub except for use as indicated above.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Cookies</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          A cookie is a string of information that a website stores on a
          visitor’s computer, and that the visitor’s browser provides to the
          website each time the visitor returns. We use cookies to obtain
          information about the preferences of our Visitors and the services
          they select. Visitors who do not wish to have cookies placed on their
          computers should set their browsers to refuse cookies before using the
          site.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Children’s Privacy
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Our Service does not address anyone under the age of 18 years, and we
          do not knowingly collect personally identifiable information from
          children under 18 years.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Compliance With Laws
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We will disclose Personally Identifiable Information in order to
          comply with a court order or subpoena or a request from a law
          enforcement agency to release information.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Contact Us
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:info@dmsolutionhub.com"
            className="text-blue-600 underline"
          >
            info@dmsolutionhub.com
          </a>
          .
        </p>

        <p className="text-sm text-gray-600">
          Last Updated: September 22, 2024
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
