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
    gradient: Schema.Attribute.Enumeration<['light', 'dark']>;
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
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435'>;
  };
}

export interface ContactsAdresse extends Struct.ComponentSchema {
  collectionName: 'components_contacts_adresses';
  info: {
    displayName: 'adresse';
  };
  attributes: {
    adresse: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactsEmail extends Struct.ComponentSchema {
  collectionName: 'components_contacts_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactsTelefoni extends Struct.ComponentSchema {
  collectionName: 'components_contacts_telefoni';
  info: {
    displayName: 'phones';
    icon: 'phone';
  };
  attributes: {
    phone: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface FestivalsVideo extends Struct.ComponentSchema {
  collectionName: 'components_festivals_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    title: Schema.Attribute.String;
    videoId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OtherCard extends Struct.ComponentSchema {
  collectionName: 'components_other_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    btn: Schema.Attribute.Component<'btns.knopka', false>;
    desc: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    photo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'contacts.adresse': ContactsAdresse;
      'contacts.email': ContactsEmail;
      'contacts.telefoni': ContactsTelefoni;
      'festivals.chas-provedennya': FestivalsChasProvedennya;
      'festivals.perevagi': FestivalsPerevagi;
      'festivals.price': FestivalsPrice;
      'festivals.video': FestivalsVideo;
      'other.card': OtherCard;
      'seo.seo': SeoSeo;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
