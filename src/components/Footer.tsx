import TabGroup from "@/components/TabGroup"

export default function Footer() {
  return <>
    <section className="w-full mt-4">
      <TabGroup />
    </section>
    <section className="w-full mt-4">
      <button className="w-full text-sm bg-blue-600 hover:bg-blue-700 transition-colors rounded font-semibold transition px-5 py-2">
        Download image
      </button>
    </section>
  </>
}
