export default function LifetimeMembershipPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-16 px-4">
      
      {/* ===== PAGE HEADING ===== */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Lifetime Membership
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Terms and Conditions / Rules & Regulations
        </p>
      </div>

      {/* ===== PREMIUM CARD ===== */}
      <div className="max-w-5xl mx-auto">
        <div className="
          group
          relative
          rounded-3xl
          bg-white/80
          backdrop-blur-md
          border border-gray-200
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          transition-all duration-500
          p-8 md:p-12
        ">
          
          {/* subtle top accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-t-3xl" />

          <ol className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-[16px] list-decimal pl-5">
            
            <li>The members shall strictly follow the terms and conditions formulated by the Management at all times.</li>

            <li>
              Membership Fee – a sum of <span className="font-semibold text-gray-900">Rs. 2,50,000</span> (Rupees Two Lakh Fifty Thousand only) + tax shall be payable as Non-refundable Membership Fee by the Members.
            </li>

            <li>The Membership shall be valid for 7 years from the date of membership.</li>

            <li>
              The Membership shall entitle the Family of the Member (spouse and 2 children) to avail the facilities offered for the Members. The Membership shall be non-transferable.
            </li>

            <li>The Members shall pay subscription charges as per tariff decided by the Management from time to time.</li>

            <li>
              The Members shall be entitled to use amenities provided in the premises. Consumables and individual equipment according to the particular game shall be brought by the Members.
            </li>

            <li>
              Members may avail Spa, Restaurant, Food Zones and other services at discounted member rates.
            </li>

            <li>
              Coaching for any sport shall be payable at discounted monthly or yearly rates in advance.
            </li>

            <li>
              Members shall book time slots through the App. Repeated no-shows may attract fines before next usage.
            </li>

            <li>
              Members are responsible for any accidents or injuries within the premises. Management shall not be liable.
            </li>

            <li>
              Guests are allowed by paying Guest Fee. Member must accompany the guest at all times.
            </li>

            <li>
              Members may celebrate special occasions. Outside catering requires written management approval.
            </li>

            <li>Membership fees are exclusive of applicable taxes.</li>

            <li>Members must be above 18 years of age.</li>

            <li>Original documents must be provided during membership submission.</li>

            <li>Members will be interviewed before approval.</li>

            <li>Monthly fees and charges must be paid within due date.</li>

            <li>
              Members shall attach valid address and DOB proof for family members and guests.
            </li>

            <li>
              <span className="font-medium text-gray-900">Accepted Proofs:</span> Aadhaar Card, PAN Card, Rental Agreement, KEB Bills, Driving License, Passport, SSLC marks card for minors, School Certificate, Birth Certificate.
            </li>

            <li>
              Misbehavior or rule violations may lead to membership disqualification without refund.
            </li>

            <li>
              Any damage caused by the Member shall be recovered by the Management.
            </li>

            <li>
              Membership valid for 7 years. Renewal tariff will be declared in the 6th year.
            </li>

            <li>Credit facility will not be allowed.</li>

            <li>
              Management is not responsible for payment arrears. Members must collect authorized invoices.
            </li>

            <li>
              Any dispute shall be settled under <span className="font-semibold text-gray-900">Mysuru jurisdiction only</span>.
            </li>

          </ol>
        </div>
      </div>
    </main>
  );
}