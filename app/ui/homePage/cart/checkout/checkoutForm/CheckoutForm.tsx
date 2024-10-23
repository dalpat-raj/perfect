import React from 'react';
import Link from 'next/link';
import { Address } from '@/lib/definations';

type Props = {
  address: Address | any,
  handleInputChange: React.ChangeEventHandler<HTMLInputElement> | any,
  orderHandler: React.FormEventHandler<HTMLFormElement>,
  paymentInfoHandler: React.ChangeEventHandler<HTMLInputElement> | any,
  saveAddress: boolean,
  setSaveAddress:React.Dispatch<React.SetStateAction<boolean>>,
}

const CheckoutForm = ({address, handleInputChange, orderHandler, paymentInfoHandler, saveAddress, setSaveAddress}: Props) => {
    
  return (
    <div className="checkout-form-container mx-auto bg-white rounded-lg px-6  max-sm:px-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <Link href="/login" className="text-gray-500 text-sm underline">Log in</Link>
      </div>
      <form onSubmit={orderHandler}>
        {/* Email Section */}
        <div className="mb-6 max-sm:mb-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={address.email}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Delivery Section */}
        <h2 className="text-lg font-semibold mb-2">Delivery</h2>
        <div className="mb-6 max-sm:mb-2">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country/Region</label>
          <select
            id="country"
            name="country"
            value={address.country}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="India">India</option>
            {/* Add other countries if needed */}
          </select>
        </div>

        {/* Name Section */}
        <div className="mb-6 max-sm:mb-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="first-name"
              name="name"
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-6 max-sm:mb-2">
          <label htmlFor="completeAddress" className="block text-sm font-medium text-gray-700">Complete Address</label>
          <textarea
            id="completeAddress"
            name="completeAddress"
            rows={3}
            value={address.completeAddress}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Landmark Section */}
        <div className="mb-6 max-sm:mb-2">
          <label htmlFor="nearbyLandmark" className="block text-sm font-medium text-gray-700">Nearby Landmark</label>
          <input
            type="text"
            id="nearbyLandmark"
            name="nearbyLandmark"
            value={address.nearbyLandmark}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* City, State, PIN Code Section */}
        <div className="grid grid-cols-3 gap-4 mb-6 max-sm:mb-2">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <select
              id="state"
              name="state"
              value={address.state}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="rajasthan">Rajasthan</option>
              <option value="aagra">aagra</option>
              {/* Add other states if needed */}
            </select>
          </div>
          <div>
            <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">PIN Code</label>
            <input
              type="number"
              id="pinCode"
              name="pinCode"
              value={address.pinCode}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Phone Section */}
        <div className="mb-6 max-sm:mb-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={address.phone}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Save Info Checkbox */}
        <div className="flex items-center mb-6 max-sm:mb-2">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveAddress"
            checked={saveAddress}
            onChange={(e)=>setSaveAddress(e.target.checked)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-900">Save this information for next time</label>
        </div>

        {/* payment  */}
        <div>
        <h2 className="text-[18px] font-semibold mb-4">Payment</h2>
          <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
          <div className="mb-6">
            <div className="flex items-center border border-gray-200 py-3 px-2 rounded-lg shadow-sm">
              <input
                type="radio"
                id="razorpay"
                name="paymentMethod"
                value="pay"
                onChange={paymentInfoHandler}
                defaultChecked
                className="h-4 w-4 text-gray-500 border-gray-300 rounded"
              />
              <label htmlFor="razorpay" className="ml-2 block text-sm text-gray-900">
                Razorpay Secure (UPI, Cards, Wallets, NetBanking)
              </label>
              <div className="ml-4">
                {/* Icons for payment options */}
                <img
                  src="/path-to-your-icons.png"
                  alt="Payment Options"
                  className="inline-block h-6"
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-200 py-3 px-2 rounded-lg shadow-sm">
              <input
                type="radio"
                id="codPayment"
                name="paymentMethod"
                value="cash"
                onChange={paymentInfoHandler}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="codPayment" className="ml-2 block text-sm text-gray-900">
                Cash on Delivery (COD)
              </label>
            </div>
            </div>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
