import { createClient } from "next-sanity";

const projectId = "l7zi3hub";
const dataset = "production";
const apiVersion = "2024-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})