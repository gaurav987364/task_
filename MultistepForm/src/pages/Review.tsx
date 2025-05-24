import { useState } from 'react';
import { BiHome, BiSend, BiUser } from 'react-icons/bi';
import { BsActivity } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCalendar, FaPhone } from 'react-icons/fa6';
import { FiEdit3, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface UserData {
  firstName: string;
  middleName?: string;
  lastName: string;
  mobileNo: string;
  email: string;
  dob: string;
  age: number;
  bloodGroup: string;
  height: string;
  weight: string;
  gender: string;
  maritalStatus: string;
}

interface AddressData {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

const Review = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample data - in real app, this would come from your form state/context
  const userData: UserData = {
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    mobileNo: '9876543210',
    email: 'john.doe@example.com',
    dob: '1990-05-15',
    age: 33,
    bloodGroup: 'O+',
    height: '175',
    weight: '70.5',
    gender: 'male',
    maritalStatus: 'single'
  };

  const addressData: AddressData = {
    addressLine1: '123 Main Street, Downtown',
    addressLine2: 'Apartment 4B',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    pincode: '400001'
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleEdit = (section: string) => {
    console.log(`Edit ${section} section`);
    // In real app, navigate back to specific form section
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 lg:p-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Success Animation */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse">
                <FaCheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Registration Successful!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Thank you for completing your registration. Your information has been successfully submitted and saved.
            </p>

            {/* Success Details */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 mb-8 border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                What happens next?
              </h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 text-left">
                <li className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  You will receive a confirmation email shortly
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  Our team will review your information within 24 hours
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  You'll be notified once your account is activated
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => console.log('Go to dashboard')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start New Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <FaCheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Review Your Information
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Please review your details before final submission
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information Card */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <BiUser className="w-5 h-5 mr-2 text-blue-500" />
                Personal Information
              </h2>
              <button
                onClick={() => handleEdit('personal')}
                className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
              >
                <FiEdit3 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</label>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {userData.firstName} {userData.middleName} {userData.lastName}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Age</label>
                  <p className="text-gray-900 dark:text-white font-medium">{userData.age} years</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                    <FaPhone className="w-4 h-4 mr-1" />
                    Mobile
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium">+91 {userData.mobileNo}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                    <FiMail className="w-4 h-4 mr-1" />
                    Email
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium break-all">{userData.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                    <FaCalendar className="w-4 h-4 mr-1" />
                    Date of Birth
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium">{userData.dob}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Blood Group</label>
                  <p className="text-gray-900 dark:text-white font-medium">{userData.bloodGroup}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</label>
                  <p className="text-gray-900 dark:text-white font-medium capitalize">{userData.gender}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                    <BsActivity className="w-4 h-4 mr-1" />
                    Height
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium">{userData.height} cm</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Weight</label>
                  <p className="text-gray-900 dark:text-white font-medium">{userData.weight} kg</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Marital Status</label>
                  <p className="text-gray-900 dark:text-white font-medium capitalize">{userData.maritalStatus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information Card */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <BiHome className="w-5 h-5 mr-2 text-green-500" />
                Address Information
              </h2>
              <button
                onClick={() => handleEdit('address')}
                className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
              >
                <FiEdit3 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Street Address</label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {addressData.addressLine1}
                  {addressData.addressLine2 && (
                    <>
                      <br />
                      <span className="text-gray-600 dark:text-gray-300">{addressData.addressLine2}</span>
                    </>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">City</label>
                  <p className="text-gray-900 dark:text-white font-medium">{addressData.city}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Pincode</label>
                  <p className="text-gray-900 dark:text-white font-medium">{addressData.pincode}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">State</label>
                  <p className="text-gray-900 dark:text-white font-medium">{addressData.state}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Country</label>
                  <p className="text-gray-900 dark:text-white font-medium">{addressData.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Section */}
        <div className="mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <FaCheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Terms & Conditions
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                  By submitting this form, you agree to our terms of service and privacy policy. 
                  Your information will be kept secure and used only for the intended purposes.
                </p>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                    defaultChecked
                  />
                  <span className="text-blue-800 dark:text-blue-200 text-sm">
                    I confirm that all information provided is accurate and complete
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <Link 
            to="/formlayout/address"
            onClick={() => console.log('Go back to address')}
            className="w-full sm:w-auto px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Back to Address
          </Link>
          
          <button
            onClick={handleFinalSubmit}
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <BiSend className="w-5 h-5 mr-2" />
                Submit Registration
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;