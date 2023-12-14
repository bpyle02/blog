import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from '../sanity/env'

// export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const client = createClient({
    projectId,
    dataset,
    useCdn: false,
});