import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent,
  } from "next-sanity";
  const config = {
    projectId: "i39h93o8",
    dataset: "production",
    apiVersion: "2021-11-09",
    useCdn: false,
  };
  export const client = createClient(config);
  export const usePreviewSubscription = createPreviewSubscriptionHook(config);
  export const urlFor = (source) => createImageUrlBuilder(config).image(source);
  export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
  });