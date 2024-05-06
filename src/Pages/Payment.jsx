import React from "react";
const Payment = () => {
  return (
    <>
      <div class="font-[sans-serif] bg-white p-4">
        <div class="lg:max-w-7xl max-w-xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-10">
            <div class="lg:col-span-2 max-lg:order-1">
              <form class="mt-16 max-w-lg">
                <h2 class="text-2xl font-extrabold text-[#333]">
                  Payment method
                </h2>

                <div class="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    class="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="min-w-[150px] px-6 py-3.5 text-sm bg-[#333] text-white rounded-md hover:bg-[#111]"
                  >
                    Confirm payment $750
                  </button>
                </div>
              </form>
            </div>
            <div class="bg-gray-100 px-6 py-8 rounded-md">
              <h2 class="text-5xl font-extrabold text-[#333]">$750</h2>
              <ul class="text-[#333] mt-10 space-y-6">
                <li class="flex flex-wrap gap-4 text-base">
                  Split Sneakers <span class="ml-auto font-bold">$150.00</span>
                </li>
                <li class="flex flex-wrap gap-4 text-base">
                  Echo Elegance <span class="ml-auto font-bold">$200.00</span>
                </li>
                <li class="flex flex-wrap gap-4 text-base">
                  VelvetGlide Boots{" "}
                  <span class="ml-auto font-bold">$300.00</span>
                </li>
                <li class="flex flex-wrap gap-4 text-base">
                  Tax <span class="ml-auto font-bold">$100.00</span>
                </li>
                <li class="flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4">
                  Total <span class="ml-auto">$750.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
