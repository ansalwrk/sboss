import React, { useState } from 'react';

const Sign: React.FC = () => {
  // State to toggle between the two forms
  // 'initialForm' corresponds to et.jpg
  // 'createAccountForm' corresponds to et1.jpg
  const [activeForm, setActiveForm] = useState<'initialForm' | 'createAccountForm'>('initialForm');

  // Handle SIGN UP button click from the first form
  const handleSignUpClick = () => {
    setActiveForm('createAccountForm');
  };

  // Handle "Sign In" link click from the second form to go back
  const handleSignInClick = () => {
    setActiveForm('initialForm');
  };

  // Dummy submit handlers for demonstration
  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted (demo). No data was sent.');
  };

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account creation demo. No actual account was created.');
  };

  const handleEnquireNow = () => {
    alert('Talk to our experts! (Demo)');
  };

  // Helper for file attachment display (just logs)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log('File attached:', e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 md:p-6 font-sans">
      <div className="w-full max-w-6xl mx-auto">
        {/* Conditionally render the form based on activeForm state */}
        {activeForm === 'initialForm' ? (
          // ============================================================
          // FIRST FORM: et.jpg (Ethical Intelligent Technologies Form)
          // Includes all fields, labels, and buttons exactly as described
          // ============================================================
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
            <div className="md:flex">
              {/* Left decorative panel (optional, but adds visual consistency) */}
              <div className="md:w-1/3 bg-indigo-900 p-6 md:p-8 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">ETHICAL INTELLIGENT TECHNOLOGIES</h2>
                  <div className="mt-4 h-1 w-12 bg-amber-400 rounded-full"></div>
                  <p className="mt-6 text-indigo-100 text-lg leading-relaxed">
                    Let's Work Together
                  </p>
                  <p className="mt-4 text-sm text-indigo-200">
                    Innovative solutions for a smarter, ethical future.
                  </p>
                </div>
                <div className="mt-8 hidden md:block">
                  <div className="text-4xl font-light opacity-30">⚡</div>
                </div>
              </div>

              {/* Right side: Full form */}
              <div className="md:w-2/3 p-6 md:p-8">
                <form onSubmit={handleInitialSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  {/* "Get Started" element - preserved exactly as per content */}
                  <div>
                    <button
                      type="button"
                      className="inline-flex items-center text-indigo-600 font-medium text-sm bg-indigo-50 px-4 py-2 rounded-full hover:bg-indigo-100 transition"
                      onClick={() => alert('Get Started demo action')}
                    >
                      Get Started
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  {/* SBOSS description text */}
                  <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                    <p className="text-indigo-800 text-sm font-medium">
                      Create your SBOSS account and access your business operating system.
                    </p>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Organization"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    ></textarea>
                  </div>

                  {/* SIGN UP button - this triggers the change to et1.jpg */}
                  <div>
                    <button
                      type="button"
                      onClick={handleSignUpClick}
                      className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2.5 rounded-lg transition shadow-md transform hover:scale-[1.01]"
                    >
                      SIGN UP
                    </button>
                  </div>

                  {/* Enter Captcha */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Enter Captcha <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Type the code"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                    {/* Visual captcha hint (keeps UX friendly but does not alter content) */}
                    <p className="text-xs text-gray-400 mt-1">Demo captcha: any text works</p>
                  </div>

                  {/* Attach File */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Attach File
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                  </div>

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2.5 rounded-lg transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          // ============================================================
          // SECOND FORM: et1.jpg (Create Your SBOSS Account)
          // Includes left form, right expert panel, all content preserved
          // ============================================================
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
            <div className="md:flex">
              {/* Left column: Create Account Form */}
              <div className="md:w-2/3 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Create Your SBOSS Account</h2>
                <p className="text-gray-500 mt-1 mb-6">
                  Set up your account to access your business operating system.
                </p>

                <form onSubmit={handleCreateAccountSubmit} className="space-y-5">
                  {/* Your Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Johnson"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                  </div>

                  {/* Work Email Address */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                  </div>

                  {/* Create Password */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Create Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                  </div>

                  {/* CREATE ACCOUNT Button */}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg transition shadow-md flex items-center justify-center gap-2"
                  >
                    CREATE ACCOUNT
                    <span className="text-lg">→</span>
                  </button>

                  {/* Already have an account? Sign In (triggers back to first form) */}
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      onClick={handleSignInClick}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition"
                    >
                      Already have an account? Sign In
                    </button>
                  </div>
                </form>
              </div>

              {/* Right column: "Need a Solution?" expert panel - exactly as per et1.jpg */}
              <div className="md:w-1/3 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-indigo-200">
                <div>
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Need a Solution?</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Talk to our experts and get the right solution for your business.
                  </p>
                  <button
                    onClick={handleEnquireNow}
                    className="mt-6 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-5 rounded-full shadow transition transform hover:scale-105"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
                <div className="mt-6 text-xs text-indigo-400">
                  <span>⚡ 24/7 expert support</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sign;