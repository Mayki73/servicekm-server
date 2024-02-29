import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'write';
  };
  attributes: {
    Question: Attribute.String & Attribute.Required;
    Answer: Attribute.Text & Attribute.Required;
  };
}

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Service: Attribute.String & Attribute.Required;
    Price: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq': FaqFaq;
      'table.table': TableTable;
    }
  }
}
