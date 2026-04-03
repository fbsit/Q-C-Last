import Link from "next/link";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

type BreadcrumbProps = {
  section: string;
  currentPage: string;
  className?: string;
};

const Breadcrumbs = ({ section, currentPage, className = "" }: BreadcrumbProps) => {

    return (
        <div className={`container marginHeaderBreadcrumbs ${className}`.trim()}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Inicio</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link href={`/${section}`}>{capitalizeFirstLetter(section)}</Link>
                </li>
                <li className="breadcrumb-item active">
                     <a>{currentPage}</a>
                </li>
            </ol>
        </div>
    );
};

export default Breadcrumbs;
