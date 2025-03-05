import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PageBreadcrumb = ({ pathName }: { pathName: string[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathName?.map((item, index) => {
          const currentLink = `/${pathName.slice(0, index + 1).join("/")}`;
          const capitalizedItem = item.charAt(0).toUpperCase() + item.slice(1);
          return (
            <BreadcrumbItem key={item} className="hidden md:flex">
              {index === pathName.length - 1 ? (
                <BreadcrumbPage>{capitalizedItem}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={currentLink}>
                    {capitalizedItem}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className="hidden md:block" />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
