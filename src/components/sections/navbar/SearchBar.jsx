// SearchBar.jsx
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="relative flex h-[44px] min-h-10 w-full items-center justify-start rounded-3xl border border-black/40 pl-10">
      {/* <section className="absolute left-4 top-0 flex h-fit w-fit cursor-pointer flex-col border-r-2 border-black/40 px-4 md:text-xs lg:text-sm">
          <p className="text-[#263633]">I'd like to</p>
          <p className="flex items-center gap-x-[2px] text-[#64726F]">
            .......
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.0875 0.259216L4.625 3.72172L1.15 0.259216L0 1.40922L4.6125 6.25922L9.2375 1.40922L8.0875 0.259216Z" fill="#64726F" />
            </svg>
          </p>
          <div className="absolute left-0 top-8 z-50 mt-1 w-[300px] rounded-xl bg-white p-4 shadow shadow-slate-300">
            <ul>
              <li className="cursor-pointer px-4 py-2"><a href="/pharmacy">Order Medication</a></li>
              <li className="cursor-pointer px-4 py-2"><a href="/doctor-at-home">See a Doctor</a></li>
              <li className="cursor-pointer px-4 py-2"><a href="/ai-screening">Screen with A.I</a></li>
              <li className="cursor-pointer px-4 py-2"><a href="/lab">Book a lab test</a></li>
            </ul>
          </div>
        </section> */}
      <div className="relative px-3">
        <label>
          <div className="absolute -top-3 left-0">
            <form role="search" className="ais-SearchBox-form">
              <input
                type="search"
                placeholder="Search for medicines, doctors, services"
                className="ais-SearchBox-input z-50 border-none outline-none md:placeholder:text-xs lg:w-[270px] lg:placeholder:text-sm"
              />
              {/* <button type="submit" title="Submit your search query." className="ais-SearchBox-submit">
                  <svg className="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
                    <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01z" />
                  </svg>
                </button>
                <button type="reset" title="Clear your search query." className="ais-SearchBox-reset" hidden>
                  <svg className="ais-SearchBox-resetIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
                    <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z" />
                  </svg>
                </button> */}
            </form>
          </div>
        </label>
      </div>
      <button
        type="submit"
        className="absolute right-0 top-1 h-[80%] self-center rounded-full px-4 text-2xl"
      >
        <CiSearch />
      </button>
    </div>
  );
}
