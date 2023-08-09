export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
    <div className="flex flex-col items-center text-center">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Get smarter about valuations
        </h2>
        <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Easy-to-understand insights on valuations inspired by investment legends.
        </p>
        <div className="flex mt-5 flex-col items-center text-center">
          <iframe
              src="https://embeds.beehiiv.com/a58fbf09-6710-4eac-9637-cd410ec67606?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              frameBorder="0"
              scrolling="no"
              style={{margin: 0, borderRadius: '0px', backgroundColor: 'transparent'}}
          ></iframe>
      </div>
    </div>
    <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center">
          <p className="text-sm text-gray-500 text-center">
              The Dean of Valuation © &#124; By{" "}
              <a href="https://www.linkedin.com/in/krizjakub/" className="text-blue-700">Jakub Kriz</a>{" "}-{" "}
              <a href="mailto:jakub@deanofvaluation.com">jakub@deanofvaluation.com</a> &#124;{" "}
              <a href="https://www.paypal.com/donate/?hosted_button_id=E8CPQJTCXKZBL" target="_blank" className="text-blue-700">Help pay the bill</a>{" "}
          </p>
      </div>
    </div>
    </footer>
  )
}
