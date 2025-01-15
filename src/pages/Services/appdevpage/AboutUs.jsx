
const AboutUs = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto my-10 p-6 ">
      <h2 className="text-3xl font-bold text-center text-[#AF986F] mb-6">
        ACCOUNTS SOFTWARE
      </h2>

      {/* Introduction */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Which Accounting Software You Should Buy?
        </h3>
        <p className="text-gray-700 mb-2">
          Are you facing problems managing your constantly growing company's financial activities? Especially for E-commerce, things can get really messy when it comes to managing employees, their salaries, daily expenditure, receivables, etc.
        </p>
        <p className="text-gray-700">
          Have you ever thought about using accounting software for better financial operations? Let's take a look and save your money!
        </p>
      </section>

      {/* What is Accounting Management */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          What is Accounting Management?
        </h3>
        <p className="text-gray-700">
          Accounting management combines organization, its financial process, strategy planning, and execution. To minimize expenditure and maintain a proper cash flow for company longevity, you need stable accounting management supported by software.
        </p>
      </section>

      {/* Features of Accounting Software */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          What are the Main Features of Accounting Software?
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Bank Reconciliation</li>
          <li>Sales, Billing, Invoice, and Purchasing Management</li>
          <li>Report Generation</li>
          <li>Financial Forecasting</li>
          <li>Asset Management</li>
        </ul>
      </section>

      {/* Importance for E-commerce */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Why is Accounting Software Important for E-commerce Business?
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Cost-saving through exact calculations and reports</li>
          <li>Better control of finance</li>
          <li>Helps make better decisions</li>
          <li>Improved data security with firewalls</li>
          <li>Speed and accuracy in reporting</li>
        </ul>
      </section>

      {/* Why EOMSBD is Special */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Why is the Accounting Software of EOMSBD Special?
        </h3>
        <p className="text-gray-700">
          EOMSBD offers easy report generation, billing and invoice management, future forecasting, and bank reconciliation. Plus, EOMSBD provides Islamic financial transaction facilities with witness tracking.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Why is accounting software important?</h4>
            <p className="text-gray-700">
              It helps manage a company's financial activity digitally and smoothly.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">What are the benefits of using accounting software?</h4>
            <p className="text-gray-700">
              Fast, error-free, simple to use, and cost-effective.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">What accounting software helps to do?</h4>
            <p className="text-gray-700">
              Prepares reports, tracks purchases, manages billing and invoices, and handles customer and vendor management.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">What are the types of financial software?</h4>
            <p className="text-gray-700">
              Spreadsheet, Custom Accounting Software, Commercially-available Software, ERP or Enterprise Resource Planning Software.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;