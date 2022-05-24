type UserProfileProps = {
  className: string;
};

const UserProfile = ({ className }: UserProfileProps) => {

  return <div className={className}>
    protected profile
    </div>;
};

export default UserProfile;
