import { groq } from "next-sanity";

const menuItemFields = /* groq */ `
  _id,
  name,
  description,
  category->{
    _id,
    order,
    title
  },
  image {
    asset->{
      _id,
      url
    }
  },
  taxIncludedPrice,
  taxExcludedPrice,
  featured,
  soldOutToday,
  available,
  displayOrder
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    order
  }
`;

export const menuItemsQuery = groq`
  *[_type == "menuItem"] | order(category->order asc, displayOrder asc) {
    ${menuItemFields}
  }
`;

export const featuredItemsQuery = groq`
  *[_type == "menuItem" && featured == true] | order(category->order asc, displayOrder asc) {
    ${menuItemFields}
  }
`;

export const promotionBannersQuery = groq`
  *[_type == "promotionBanner" && active == true] | order(priority desc) {
    _id,
    title,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
    active,
    priority,
    startDate,
    endDate
  }
`;
