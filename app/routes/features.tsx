import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Features - Namerics" },
    { name: "description", content: "Explore the features of Namerics username generator" },
  ];
};

export default function Features() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Indonesian Heritage</h2>
          <p className="text-gray-700">
            Generate usernames inspired by Indonesia's rich cultural heritage, regional languages, and local wisdom.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Customization</h2>
          <p className="text-gray-700">
            Customize your usernames with prefixes, suffixes, length requirements, and optional numbers.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Bulk Generation</h2>
          <p className="text-gray-700">
            Generate multiple username suggestions at once to find the perfect match for your online identity.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Cultural Categories</h2>
          <p className="text-gray-700">
            Choose from different cultural categories including regional languages, mythology, arts, and nature.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">One-Click Copy</h2>
          <p className="text-gray-700">
            Easily copy your favorite username to clipboard with a single click for immediate use.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Meaning Insights</h2>
          <p className="text-gray-700">
            Learn the cultural meaning and origin behind each generated username for a deeper connection.
          </p>
        </div>
      </div>
    </div>
  );
}