import type { Schema, Struct } from '@strapi/strapi';

export interface BannersBaneri extends Struct.ComponentSchema {
  collectionName: 'components_banners_baneri';
  info: {
    displayName: '\u0411\u0430\u043D\u0435\u0440\u0438';
    icon: 'stack';
  };
  attributes: {
    btn: Schema.Attribute.Component<'btns.knopka', true>;
    color: Schema.Attribute.Enumeration<['green', 'fiolet']>;
    desc: Schema.Attribute.RichText;
    gradient: Schema.Attribute.Enumeration<['light', 'grey']>;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BtnsKnopka extends Struct.ComponentSchema {
  collectionName: 'components_btns_knopka';
  info: {
    displayName: '\u043A\u043D\u043E\u043F\u043A\u0430';
    icon: 'stack';
  };
  attributes: {
    slug: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FestivalsChasProvedennya extends Struct.ComponentSchema {
  collectionName: 'components_festivals_chas_provedennya';
  info: {
    displayName: '\u0447\u0430\u0441 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044F';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface FestivalsPerevagi extends Struct.ComponentSchema {
  collectionName: 'components_festivals_perevagi';
  info: {
    displayName: '\u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0438';
    icon: 'bulletList';
  };
  attributes: {
    desc: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface FestivalsPrice extends Struct.ComponentSchema {
  collectionName: 'components_festivals_prices';
  info: {
    displayName: 'price';
  };
  attributes: {
    days: Schema.Attribute.String;
    price: Schema.Attribute.RichText;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'globe';
  };
  attributes: {
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banners.baneri': BannersBaneri;
      'btns.knopka': BtnsKnopka;
      'festivals.chas-provedennya': FestivalsChasProvedennya;
      'festivals.perevagi': FestivalsPerevagi;
      'festivals.price': FestivalsPrice;
      'seo.seo': SeoSeo;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
