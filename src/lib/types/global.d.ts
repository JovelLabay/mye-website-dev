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
