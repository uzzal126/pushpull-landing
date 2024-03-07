import AppDetailsContent from "@/app/components/AppDetailsContent";
import RelatedApps from "@/app/components/RelatedApps";

export const metadata = {
  title: "PushPull App Details",
};

const api_url = `${process.env.NEXT_PUBLIC_APP_STRAPI_URL}/push-pull-entertainment-services?populate=*`;

const getServiceData = async (slug) => {
  const api_url = `${process.env.NEXT_PUBLIC_APP_STRAPI_URL}/push-pull-entertainment-services?populate=*&sort=slug:ASC&filters[$and][0][slug][$eq]=${slug}`;

  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_APP_STRAPI_TOKEN}`
  );

  try {
    const res = await fetch(api_url, {
      cache: "no-store",
      headers: myHeaders,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getServicesData = async () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_APP_STRAPI_TOKEN}`
  );

  try {
    const res = await fetch(api_url, {
      cache: "no-store",
      headers: myHeaders,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const AppDetails = async ({ params }) => {
  const { slug } = params;

  const service = await getServiceData(slug);
  const services = await getServicesData();

  return (
    <main className="main">
      <div className="pt-36 md:pt-40 pb-15">
        <div className="container">
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-12 md:col-span-4">
              <div className="thumb">
                <img
                  src={`https://cms.webmanza.com${service?.data[0]?.attributes?.iconBig?.data?.attributes?.url}`}
                  alt={service?.data[0]?.attributes?.title}
                  className="rounded-xl overflow-hidden"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <AppDetailsContent service={service.data[0]} />
            </div>
          </div>
        </div>
      </div>

      <RelatedApps services={services?.data} slug={slug} />
    </main>
  );
};

export default AppDetails;
