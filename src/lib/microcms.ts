export type MicroCmsImage = {
  url: string;
  height?: number;
  width?: number;
};

export type WorkImage = {
  img: MicroCmsImage;
};

export type Work = {
  id: string;
  title: string;
  description: string;
  description_right?: string;
  image?: WorkImage[];
};

export type About = {
  img?: MicroCmsImage;
  profile?: string;
  contact?: {
    text: string;
    link: string;
    img: MicroCmsImage;
  }[];
};

type ListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

const serviceDomain = import.meta.env.SERVICE_DOMAIN;
const apiKey = import.meta.env.API_KEY;
const requiresContent = process.env.CF_PAGES === "1" || process.env.CI === "true";

function hasMicroCmsConfig() {
  return Boolean(serviceDomain && apiKey);
}

async function request<T>(path: string): Promise<T | null> {
  if (!hasMicroCmsConfig()) {
    if (requiresContent) {
      throw new Error("SERVICE_DOMAIN and API_KEY are required for production builds.");
    }
    console.warn("SERVICE_DOMAIN and API_KEY are required to fetch microCMS content.");
    return null;
  }

  const url = new URL(`https://${serviceDomain}.microcms.io/api/v1/${path}`);
  const response = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`microCMS request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getWorks(limit = 50): Promise<ListResponse<Work>> {
  const data = await request<ListResponse<Work>>(`works?limit=${limit}`);
  return data ?? { contents: [], totalCount: 0, offset: 0, limit };
}

export async function getWork(id: string): Promise<Work | null> {
  return request<Work>(`works/${id}`);
}

export async function getAbout(): Promise<About> {
  const data = await request<About>("about");
  return data ?? { profile: "", contact: [] };
}

export function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, "");
}
