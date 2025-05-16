type UsernameListProps = {
  usernames: string[];
  onSelect: (username: string) => void;
};

export default function UsernameList({ usernames, onSelect }: UsernameListProps) {
  if (usernames.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <h2>Generated Usernames</h2>
      <p>Click on a username to copy it to clipboard</p>
      
      <div className="username-list">
        {usernames.map((username, index) => (
          <div 
            key={index} 
            className="username-item"
            onClick={() => onSelect(username)}
          >
            {username}
          </div>
        ))}
      </div>
    </div>
  );
}