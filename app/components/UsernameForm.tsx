import { useState } from "react";

type UsernameFormProps = {
  onGenerate: (options: UsernameOptions) => void;
};

export type UsernameOptions = {
  prefix?: string;
  suffix?: string;
  minLength: number;
  maxLength: number;
  includeNumbers: boolean;
  count: number;
};

export default function UsernameForm({ onGenerate }: UsernameFormProps) {
  const [options, setOptions] = useState<UsernameOptions>({
    prefix: "",
    suffix: "",
    minLength: 5,
    maxLength: 12,
    includeNumbers: true,
    count: 5,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setOptions({
      ...options,
      [name]: type === "checkbox" 
        ? (e.target as HTMLInputElement).checked 
        : type === "number" 
          ? parseInt(value, 10) 
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(options);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-group">
        <label htmlFor="prefix">Prefix (optional)</label>
        <input
          type="text"
          id="prefix"
          name="prefix"
          className="form-control"
          value={options.prefix}
          onChange={handleChange}
          placeholder="e.g., Cool"
        />
      </div>

      <div className="form-group">
        <label htmlFor="suffix">Suffix (optional)</label>
        <input
          type="text"
          id="suffix"
          name="suffix"
          className="form-control"
          value={options.suffix}
          onChange={handleChange}
          placeholder="e.g., Pro"
        />
      </div>

      <div className="form-group">
        <label htmlFor="minLength">Minimum Length</label>
        <input
          type="number"
          id="minLength"
          name="minLength"
          className="form-control"
          value={options.minLength}
          onChange={handleChange}
          min={3}
          max={20}
        />
      </div>

      <div className="form-group">
        <label htmlFor="maxLength">Maximum Length</label>
        <input
          type="number"
          id="maxLength"
          name="maxLength"
          className="form-control"
          value={options.maxLength}
          onChange={handleChange}
          min={3}
          max={20}
        />
      </div>

      <div className="form-group">
        <label htmlFor="count">Number of Usernames to Generate</label>
        <input
          type="number"
          id="count"
          name="count"
          className="form-control"
          value={options.count}
          onChange={handleChange}
          min={1}
          max={20}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="includeNumbers"
            checked={options.includeNumbers}
            onChange={handleChange}
          />
          Include Numbers
        </label>
      </div>

      <button type="submit" className="btn">Generate Usernames</button>
    </form>
  );
}