import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { generateUsernames } from "~/utils/usernameGenerator";

export const meta: MetaFunction = () => {
  return [
    { title: "Username Generator - Namerics" },
    { name: "description", content: "Generate unique Indonesian-inspired usernames" },
  ];
};

export default function Generator() {
  const [options, setOptions] = useState({
    prefix: "",
    suffix: "",
    minLength: 5,
    maxLength: 20,
    includeNumbers: true,
    count: 5
  });
  
  const [usernames, setUsernames] = useState<string[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setOptions(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedUsernames = generateUsernames(options);
    setUsernames(generatedUsernames);
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Username "${text}" copied to clipboard!`);
  };
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Username Generator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Options</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Prefix</label>
                <input
                  aria-label="Prefix"
                  placeholder="Enter prefix"
                  title="Enter a prefix to add before the username"
                  type="text"
                  name="prefix"
                  value={options.prefix}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Suffix</label>
                <input
                  aria-label="Suffix"
                  placeholder="Enter suffix"
                  title="Enter a suffix to add after the username"
                  type="text"
                  name="suffix"
                  value={options.suffix}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Min Length</label>
                <input
                  aria-label="Minimum Length"
                  placeholder="Enter minimum length"
                  title="Enter the minimum length for generated usernames"
                  type="number"
                  name="minLength"
                  value={options.minLength}
                  onChange={handleChange}
                  min="3"
                  max="30"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Max Length</label>
                <input
                  aria-label="Maximum Length"
                  placeholder="Enter maximum length"
                  title="Enter the maximum length for generated usernames"
                  type="number"
                  name="maxLength"
                  value={options.maxLength}
                  onChange={handleChange}
                  min="3"
                  max="30"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Number of Usernames</label>
                <input
                  aria-label="Number of Usernames"
                  placeholder="Enter number of usernames to generate"
                  title="Enter how many usernames you want to generate"
                  type="number"
                  name="count"
                  value={options.count}
                  onChange={handleChange}
                  min="1"
                  max="20"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="includeNumbers"
                    checked={options.includeNumbers}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm">Include Numbers</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-2 px-4 rounded-md hover:bg-amber-800 transition"
              >
                Generate Usernames
              </button>
            </form>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Generated Usernames</h2>
            
            {usernames.length === 0 ? (
              <p className="text-gray-500">
                Configure your options and click "Generate Usernames" to see results here.
              </p>
            ) : (
              <ul className="space-y-3">
                {usernames.map((username, index) => (
                  <li 
                    key={index}
                    className="flex justify-between items-center p-3 bg-amber-50 rounded-md"
                  >
                    <span className="font-medium">{username}</span>
                    <button
                      onClick={() => copyToClipboard(username)}
                      className="text-sm text-amber-700 hover:text-amber-900"
                    >
                      Copy
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}