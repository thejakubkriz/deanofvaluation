import { EnumInputMetadataBuilder } from 'graphql-ts-client-api';

const builder = new EnumInputMetadataBuilder();

builder.add("OrderDirection");

builder.add("MetricOrderBy", [
    {name: "id", typeName: "OrderDirection"}, 
    {name: "name", typeName: "OrderDirection"}, 
    {name: "description", typeName: "OrderDirection"}
]);

builder.add("CategoryOrderBy", [
    {name: "id", typeName: "OrderDirection"}, 
    {name: "name", typeName: "OrderDirection"}
]);

builder.add("YearOrderBy", [
    {name: "id", typeName: "OrderDirection"}, 
    {name: "dateUpdated", typeName: "OrderDirection"}
]);

builder.add("RegionOrderBy", [
    {name: "id", typeName: "OrderDirection"}, 
    {name: "region", typeName: "OrderDirection"}
]);

builder.add("IndustryOrderBy", [
    {name: "id", typeName: "OrderDirection"}, 
    {name: "name", typeName: "OrderDirection"}
]);

builder.add("MetricValueOrderBy", [
    {name: "id", typeName: "OrderDirection"}, 
    {name: "value", typeName: "OrderDirection"}, 
    {name: "year", typeName: "YearOrderBy"}, 
    {name: "region", typeName: "RegionOrderBy"}, 
    {name: "industry", typeName: "IndustryOrderBy"}, 
    {name: "metric", typeName: "MetricOrderBy"}
]);

builder.add("_OnDeleteBehaviour");

builder.add("_RelationSide");

builder.add("_OrderByDirection");

builder.add("S33ContentDisposition");

builder.add("S3Acl");

builder.add("S3GenerateSignedUploadInput", [
    {name: "contentDisposition", typeName: "S33ContentDisposition"}, 
    {name: "acl", typeName: "S3Acl"}
]);

export const ENUM_INPUT_METADATA = builder.build();
