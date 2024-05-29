import { Card, Carousel, Layout, ServiceCard } from "@/components";
import { Banner, Contact } from "@/components/section";
import { getData } from "./api/route";

export default async function Home() {
  const data = await getData();
  const { sponsorLogo, serviceCategory, packages, contact } = data
  

  return (
    <section className="max-w-screen-xl mx-auto">
      <Banner />
      <div className='relative max-w-screen-xl py-2 mx-auto mb-8 bg-white slider rounded-xl'>
        <Carousel elementType="infinite" data={sponsorLogo} />
      </div>

      {/* Services */}
      <Layout title="Our Services" cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          serviceCategory?.map((item, index) => (
            <ServiceCard text={item.name} key={index} />
          ))
        }
      </Layout>
      {/* Hajj */}
      <Layout title="Hajj Packages" cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="hajj">
        {
          packages?.hajj?.map((item, index) => (
            <Card key={index} data={item} />
          ))
        }
      </Layout>
      {/* Umrah */}
      <Layout title="Umrah Packages" cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="umrah">
        {
          packages?.umrah?.map((item, index) => (
            <Card key={index} data={item} />
          ))
        }
      </Layout>
      {/* Inbound */}
      <Layout title="Inbound Packages" cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          packages?.inbound?.map((item, index) => (
            <Card key={index} data={item} />
          ))
        }
      </Layout>
      {/* Outbound */}
      <Layout title="Outbound Packages" cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="contact">
        {
          packages?.outbound?.map((item, index) => (
            <Card key={index} data={item} />
          ))
        }
      </Layout>
      {/* Contact */}
      <Contact data={contact} />
    </section>
  )
}
