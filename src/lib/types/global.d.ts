interface GetInTouchForm {
  name: string;
  email: string;
  message: string;
}

interface JoinOurTeamForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface WysiwygProps {
  content: string;
  className?: string;
}

interface ProductsList {
  productsAndServices: {
    title: string;
    productServiceItem: {
      description: string;
      label: string;
      iconImage: {
        sourceUrl: string;
      };
      productsMainContent: string;
    }[];
  }[];
}

interface BlogsNewsData {
  node: {
    blogsAndNewsPost: {
      isPostFeatured: boolean | null;
      postBodyContent: string | null;
      postCategory: string[];
      postPublished: string | null;
      postShortDescription: string | null;
      postShortImage: {
        sourceUrl: string | null;
      };
      postTitle: string | null;
    };
    id: string;
    title: string;
    uri: string;
    author: {
      node: {
        userId: string;
        email: string;
        lastName: string;
        firstName: string;
        avatar: {
          url: string;
        };
      };
    };
  };
}

interface ServicesList {
  item: {
    description: string;
    learnMore: string;
    title: string;
    serviceList: {
      service: string;
      serviceMainContent: string;
    }[];
  }[];
}

// GLOBAL CONTEXT
interface GlobalContextProps {
  productsServicesPage: {
    activeTab: string;
    setActiveTab: Dispatch<
      SetStateAction<{
        activeTab: string;
      }>
    >;
  };
}

// APPLY FORM
interface StatusState {
  modal: boolean;
  status: boolean;
  buttonStatus: boolean;
  feedback: boolean;
  position: string;
}

interface JoinOurTeamFormProps {
  currentStatus: StatusState;
  setCurrentStatus: React.Dispatch<React.SetStateAction<StatusState>>;
}
