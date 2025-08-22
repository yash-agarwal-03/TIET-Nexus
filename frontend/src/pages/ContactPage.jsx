import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with TIET - We're here to help with all your queries</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded shadow p-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">Campus Address</h2>
              <p className="text-gray-600">
                Thapar Institute of Engineering & Technology<br />
                P.O. Box 32, Patiala - 147004<br />
                Punjab, India
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">Phone Numbers</h2>
              <div className="space-y-1">
                <div><span className="font-medium">Main Office:</span> <span className="text-gray-600">+91-175-2393021</span></div>
                <div><span className="font-medium">Admissions:</span> <span className="text-gray-600">+91-175-2393022</span></div>
                <div><span className="font-medium">Hostel Office:</span> <span className="text-gray-600">+91-175-2393023</span></div>
              </div>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">Email Addresses</h2>
              <div className="space-y-1">
                <div><span className="font-medium">General Inquiries:</span> <span className="text-gray-600">info@thapar.edu</span></div>
                <div><span className="font-medium">Admissions:</span> <span className="text-gray-600">admissions@thapar.edu</span></div>
                <div><span className="font-medium">Technical Support:</span> <span className="text-gray-600">support@thapar.edu</span></div>
              </div>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">Office Hours</h2>
              <div className="space-y-1">
                <div className="flex justify-between"><span>Monday - Friday</span><span className="text-gray-600">9:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-gray-600">9:00 AM - 1:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-gray-600">Closed</span></div>
              </div>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">Online Resources</h2>
              <div className="space-y-1">
                <div><span className="font-medium">Official Website:</span> <a href="https://www.thapar.edu" className="text-blue-600 hover:underline">www.thapar.edu</a></div>
                <div><span className="font-medium">Student Portal:</span> <a href="https://portal.thapar.edu" className="text-blue-600 hover:underline">portal.thapar.edu</a></div>
              </div>
            </div>
          </div>
          {/* Contact Form and Emergency Contacts */}
          <div>
            <div className="bg-white rounded shadow p-4 mb-6">
              <h2 className="text-lg font-semibold mb-2">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input className="w-full border rounded px-3 py-2" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input className="w-full border rounded px-3 py-2" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full border rounded px-3 py-2" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full border rounded px-3 py-2" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input className="w-full border rounded px-3 py-2" placeholder="What is this regarding?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea className="w-full border rounded px-3 py-2" placeholder="Please describe your query in detail..." rows={6} />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Send Message</button>
              </form>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-2 text-red-600">Emergency Contacts</h2>
              <div className="space-y-1">
                <div className="flex justify-between"><span>Campus Security</span><span className="font-medium">+91-175-2393000</span></div>
                <div className="flex justify-between"><span>Medical Emergency</span><span className="font-medium">+91-175-2393001</span></div>
                <div className="flex justify-between"><span>Hostel Warden</span><span className="font-medium">+91-175-2393002</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
