import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  name: Scalars['String'];
  products?: Maybe<ProductRelationResponseCollection>;
  slug: Scalars['String'];
  smallDescription: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  smallDescription?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  smallDescription?: InputMaybe<Scalars['String']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentOrderItem = {
  __typename?: 'ComponentOrderItem';
  amount: Scalars['Int'];
  id: Scalars['ID'];
  product?: Maybe<ProductEntityResponse>;
};

export type ComponentOrderItemFiltersInput = {
  amount?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentOrderItemFiltersInput>>>;
  not?: InputMaybe<ComponentOrderItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOrderItemFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
};

export type ComponentOrderItemInput = {
  amount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  product?: InputMaybe<Scalars['ID']>;
};

export type ComponentPageMeta = {
  __typename?: 'ComponentPageMeta';
  content: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ComponentPageMetaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageMetaFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPageMetaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageMetaFiltersInput>>>;
};

export type ComponentPageMetaInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentProductInformationSection = {
  __typename?: 'ComponentProductInformationSection';
  content: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentProductInformationSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductInformationSectionFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductInformationSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductInformationSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentProductInformationSectionInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FastUser = {
  __typename?: 'FastUser';
  createdAt?: Maybe<Scalars['DateTime']>;
  orders?: Maybe<OrderRelationResponseCollection>;
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FastUserOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FastUserEntity = {
  __typename?: 'FastUserEntity';
  attributes?: Maybe<FastUser>;
  id?: Maybe<Scalars['ID']>;
};

export type FastUserEntityResponse = {
  __typename?: 'FastUserEntityResponse';
  data?: Maybe<FastUserEntity>;
};

export type FastUserEntityResponseCollection = {
  __typename?: 'FastUserEntityResponseCollection';
  data: Array<FastUserEntity>;
  meta: ResponseCollectionMeta;
};

export type FastUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FastUserFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FastUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FastUserFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  token?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FastUserInput = {
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  token?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Category | ComponentOrderItem | ComponentPageMeta | ComponentProductInformationSection | FastUser | GlobalSeo | HomePage | I18NLocale | Order | Product | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type GlobalSeo = {
  __typename?: 'GlobalSeo';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GlobalSeoRelationResponseCollection>;
  meta?: Maybe<Array<Maybe<ComponentPageMeta>>>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaTitle: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GlobalSeoMetaArgs = {
  filters?: InputMaybe<ComponentPageMetaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GlobalSeoEntity = {
  __typename?: 'GlobalSeoEntity';
  attributes?: Maybe<GlobalSeo>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalSeoEntityResponse = {
  __typename?: 'GlobalSeoEntityResponse';
  data?: Maybe<GlobalSeoEntity>;
};

export type GlobalSeoInput = {
  meta?: InputMaybe<Array<InputMaybe<ComponentPageMetaInput>>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type GlobalSeoRelationResponseCollection = {
  __typename?: 'GlobalSeoRelationResponseCollection';
  data: Array<GlobalSeoEntity>;
};

export type HomePage = {
  __typename?: 'HomePage';
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  products?: Maybe<ProductRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomePageProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createFastUser?: Maybe<FastUserEntityResponse>;
  createGlobalSeoLocalization?: Maybe<GlobalSeoEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createProductLocalization?: Maybe<ProductEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteFastUser?: Maybe<FastUserEntityResponse>;
  deleteGlobalSeo?: Maybe<GlobalSeoEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFastUser?: Maybe<FastUserEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobalSeo?: Maybe<GlobalSeoEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFastUserArgs = {
  data: FastUserInput;
};


export type MutationCreateGlobalSeoLocalizationArgs = {
  data?: InputMaybe<GlobalSeoInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProductLocalizationArgs = {
  data?: InputMaybe<ProductInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFastUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGlobalSeoArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFastUserArgs = {
  data: FastUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalSeoArgs = {
  data: GlobalSeoInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Order = {
  __typename?: 'Order';
  amount: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  item: Array<Maybe<ComponentOrderItem>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<FastUserEntityResponse>;
};


export type OrderItemArgs = {
  filters?: InputMaybe<ComponentOrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  amount?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<FastUserFiltersInput>;
};

export type OrderInput = {
  amount?: InputMaybe<Scalars['Float']>;
  item?: InputMaybe<Array<InputMaybe<ComponentOrderItemInput>>>;
  user?: InputMaybe<Scalars['ID']>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  data: Array<OrderEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images?: Maybe<UploadFileRelationResponseCollection>;
  information?: Maybe<Array<Maybe<ComponentProductInformationSection>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ProductRelationResponseCollection>;
  name: Scalars['String'];
  price: Scalars['Float'];
  slug: Scalars['String'];
  smallDescription: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductInformationArgs = {
  filters?: InputMaybe<ComponentProductInformationSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductLocalizationsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProductFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  smallDescription?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  information?: InputMaybe<Array<InputMaybe<ComponentProductInformationSectionInput>>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  smallDescription?: InputMaybe<Scalars['String']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  fastUser?: Maybe<FastUserEntityResponse>;
  fastUsers?: Maybe<FastUserEntityResponseCollection>;
  globalSeo?: Maybe<GlobalSeoEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryFastUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFastUsersArgs = {
  filters?: InputMaybe<FastUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGlobalSeoArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type CategoriesSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesSearchQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null }> } | null };

export type FavoriteProductsQueryVariables = Exact<{
  value?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type FavoriteProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', price: number, description: string, slug: string, smallDescription: string, name: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null }> } | null };

export type GlobalSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalSeoQuery = { __typename?: 'Query', globalSeo?: { __typename?: 'GlobalSeoEntityResponse', data?: { __typename?: 'GlobalSeoEntity', attributes?: { __typename?: 'GlobalSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, meta?: Array<{ __typename?: 'ComponentPageMeta', id: string, name: string, content: string } | null> | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', price: number, description: string, slug: string, smallDescription: string, name: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null }> } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, smallDescription: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type ProductCartQueryVariables = Exact<{
  value?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ProductCartQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', price: number, slug: string, smallDescription: string, name: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null }> } | null };

export type ProductSearchQueryVariables = Exact<{
  i?: InputMaybe<Scalars['String']>;
  c?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  s?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  p?: InputMaybe<FloatFilterInput>;
}>;


export type ProductSearchQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', price: number, description: string, slug: string, smallDescription: string, name: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null }> } | null };

export type ProductSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ProductSlugQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', slug: string, smallDescription: string, name: string, description: string, price: number, information?: Array<{ __typename?: 'ComponentProductInformationSection', title: string, content: string } | null> | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null }> } | null };

export type SearchbarSearchQueryVariables = Exact<{
  value?: InputMaybe<Scalars['String']>;
}>;


export type SearchbarSearchQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', slug: string, smallDescription: string, name: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null }> } | null };


export const CategoriesSearchDocument = gql`
    query CategoriesSearch {
  categories {
    data {
      attributes {
        slug
        name
      }
    }
  }
}
    `;

/**
 * __useCategoriesSearchQuery__
 *
 * To run a query within a React component, call `useCategoriesSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesSearchQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesSearchQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesSearchQuery, CategoriesSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesSearchQuery, CategoriesSearchQueryVariables>(CategoriesSearchDocument, options);
      }
export function useCategoriesSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesSearchQuery, CategoriesSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesSearchQuery, CategoriesSearchQueryVariables>(CategoriesSearchDocument, options);
        }
export type CategoriesSearchQueryHookResult = ReturnType<typeof useCategoriesSearchQuery>;
export type CategoriesSearchLazyQueryHookResult = ReturnType<typeof useCategoriesSearchLazyQuery>;
export type CategoriesSearchQueryResult = Apollo.QueryResult<CategoriesSearchQuery, CategoriesSearchQueryVariables>;
export const FavoriteProductsDocument = gql`
    query FavoriteProducts($value: [String]) {
  products(filters: {slug: {in: $value}}, pagination: {limit: 50}) {
    data {
      id
      attributes {
        price
        description
        slug
        smallDescription
        name
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFavoriteProductsQuery__
 *
 * To run a query within a React component, call `useFavoriteProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteProductsQuery({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */
export function useFavoriteProductsQuery(baseOptions?: Apollo.QueryHookOptions<FavoriteProductsQuery, FavoriteProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavoriteProductsQuery, FavoriteProductsQueryVariables>(FavoriteProductsDocument, options);
      }
export function useFavoriteProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteProductsQuery, FavoriteProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavoriteProductsQuery, FavoriteProductsQueryVariables>(FavoriteProductsDocument, options);
        }
export type FavoriteProductsQueryHookResult = ReturnType<typeof useFavoriteProductsQuery>;
export type FavoriteProductsLazyQueryHookResult = ReturnType<typeof useFavoriteProductsLazyQuery>;
export type FavoriteProductsQueryResult = Apollo.QueryResult<FavoriteProductsQuery, FavoriteProductsQueryVariables>;
export const GlobalSeoDocument = gql`
    query GlobalSeo {
  globalSeo {
    data {
      attributes {
        metaTitle
        metaImage {
          data {
            attributes {
              url
            }
          }
        }
        metaDescription
        meta {
          id
          name
          content
        }
      }
    }
  }
}
    `;

/**
 * __useGlobalSeoQuery__
 *
 * To run a query within a React component, call `useGlobalSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalSeoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalSeoQuery(baseOptions?: Apollo.QueryHookOptions<GlobalSeoQuery, GlobalSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlobalSeoQuery, GlobalSeoQueryVariables>(GlobalSeoDocument, options);
      }
export function useGlobalSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlobalSeoQuery, GlobalSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlobalSeoQuery, GlobalSeoQueryVariables>(GlobalSeoDocument, options);
        }
export type GlobalSeoQueryHookResult = ReturnType<typeof useGlobalSeoQuery>;
export type GlobalSeoLazyQueryHookResult = ReturnType<typeof useGlobalSeoLazyQuery>;
export type GlobalSeoQueryResult = Apollo.QueryResult<GlobalSeoQuery, GlobalSeoQueryVariables>;
export const HomePageDocument = gql`
    query HomePage {
  homePage {
    data {
      attributes {
        products {
          data {
            id
            attributes {
              price
              description
              slug
              smallDescription
              name
              images {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        categories {
          data {
            id
            attributes {
              name
              slug
              smallDescription
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const ProductCartDocument = gql`
    query ProductCart($value: [String]) {
  products(filters: {slug: {in: $value}}, pagination: {limit: 50}) {
    data {
      id
      attributes {
        price
        slug
        smallDescription
        name
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useProductCartQuery__
 *
 * To run a query within a React component, call `useProductCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCartQuery({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */
export function useProductCartQuery(baseOptions?: Apollo.QueryHookOptions<ProductCartQuery, ProductCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductCartQuery, ProductCartQueryVariables>(ProductCartDocument, options);
      }
export function useProductCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCartQuery, ProductCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductCartQuery, ProductCartQueryVariables>(ProductCartDocument, options);
        }
export type ProductCartQueryHookResult = ReturnType<typeof useProductCartQuery>;
export type ProductCartLazyQueryHookResult = ReturnType<typeof useProductCartLazyQuery>;
export type ProductCartQueryResult = Apollo.QueryResult<ProductCartQuery, ProductCartQueryVariables>;
export const ProductSearchDocument = gql`
    query ProductSearch($i: String, $c: [String], $s: [String], $p: FloatFilterInput) {
  products(
    filters: {name: {containsi: $i}, category: {slug: {in: $c}}, price: $p}
    pagination: {limit: 50}
    sort: $s
  ) {
    data {
      id
      attributes {
        price
        description
        slug
        smallDescription
        name
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useProductSearchQuery__
 *
 * To run a query within a React component, call `useProductSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSearchQuery({
 *   variables: {
 *      i: // value for 'i'
 *      c: // value for 'c'
 *      s: // value for 's'
 *      p: // value for 'p'
 *   },
 * });
 */
export function useProductSearchQuery(baseOptions?: Apollo.QueryHookOptions<ProductSearchQuery, ProductSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductSearchQuery, ProductSearchQueryVariables>(ProductSearchDocument, options);
      }
export function useProductSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSearchQuery, ProductSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductSearchQuery, ProductSearchQueryVariables>(ProductSearchDocument, options);
        }
export type ProductSearchQueryHookResult = ReturnType<typeof useProductSearchQuery>;
export type ProductSearchLazyQueryHookResult = ReturnType<typeof useProductSearchLazyQuery>;
export type ProductSearchQueryResult = Apollo.QueryResult<ProductSearchQuery, ProductSearchQueryVariables>;
export const ProductSlugDocument = gql`
    query ProductSlug($slug: String) {
  products(filters: {slug: {eq: $slug}}, pagination: {limit: 1}) {
    data {
      id
      attributes {
        slug
        smallDescription
        name
        information {
          title
          content
        }
        description
        price
        category {
          data {
            id
            attributes {
              slug
              name
            }
          }
        }
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useProductSlugQuery__
 *
 * To run a query within a React component, call `useProductSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductSlugQuery(baseOptions?: Apollo.QueryHookOptions<ProductSlugQuery, ProductSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductSlugQuery, ProductSlugQueryVariables>(ProductSlugDocument, options);
      }
export function useProductSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSlugQuery, ProductSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductSlugQuery, ProductSlugQueryVariables>(ProductSlugDocument, options);
        }
export type ProductSlugQueryHookResult = ReturnType<typeof useProductSlugQuery>;
export type ProductSlugLazyQueryHookResult = ReturnType<typeof useProductSlugLazyQuery>;
export type ProductSlugQueryResult = Apollo.QueryResult<ProductSlugQuery, ProductSlugQueryVariables>;
export const SearchbarSearchDocument = gql`
    query SearchbarSearch($value: String) {
  products(filters: {name: {containsi: $value}}, pagination: {limit: 5}) {
    data {
      id
      attributes {
        slug
        smallDescription
        name
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSearchbarSearchQuery__
 *
 * To run a query within a React component, call `useSearchbarSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchbarSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchbarSearchQuery({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */
export function useSearchbarSearchQuery(baseOptions?: Apollo.QueryHookOptions<SearchbarSearchQuery, SearchbarSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchbarSearchQuery, SearchbarSearchQueryVariables>(SearchbarSearchDocument, options);
      }
export function useSearchbarSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchbarSearchQuery, SearchbarSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchbarSearchQuery, SearchbarSearchQueryVariables>(SearchbarSearchDocument, options);
        }
export type SearchbarSearchQueryHookResult = ReturnType<typeof useSearchbarSearchQuery>;
export type SearchbarSearchLazyQueryHookResult = ReturnType<typeof useSearchbarSearchLazyQuery>;
export type SearchbarSearchQueryResult = Apollo.QueryResult<SearchbarSearchQuery, SearchbarSearchQueryVariables>;