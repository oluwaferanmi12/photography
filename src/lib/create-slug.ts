
export const CreateSlug = (title: string) => {
    return title.split(' ').filter(Boolean).map(word => word.toLowerCase()).join('-')
};
