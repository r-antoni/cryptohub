"use client"

import marketStore from "@/lib/stores/marketStore"
import { useEffect, useState } from "react"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import Coin from "./coin"
import { Separator } from "../ui/separator"


const Markets = () => {
    const store = marketStore()
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(50);

    useEffect(() => {
        store.fetchMarket()
    },[])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = store.marketCoins.slice(firstPostIndex, lastPostIndex);

  return (
    <section>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 py-2 gap-4 text-sm font-medium text-slate-500'>
            <span>Name</span> 
            <span className='invisible xl:visible'>24H High</span>
            <span className='invisible xl:visible'>24H Low</span>
            <span className='invisible md:visible'>24H Change</span>
            <span>Current Price</span>
            <span className='invisible xl:visible'>Market Cap</span>
            <span className='invisible xl:visible'>24H Volume</span>
        </div>
        <Separator />
        <div className="py-3">
        {currentPosts.map((coin:any) => 
                <Coin key={coin.id} coin={coin}/>
            )}
        </div>
        <PaginationSection 
        totalPosts={store.marketCoins.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
    </section>
  )
}

function PaginationSection({
    totalPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,
  }: {
    totalPosts: any;
    postsPerPage: any;
    currentPage: any;
    setCurrentPage: any;
  }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const maxPageNum = 5; // Maximum page numbers to display at once
    const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible
  
    let activePages = pageNumbers.slice(
      Math.max(0, currentPage - 1 - pageNumLimit),
      Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
    );
  
    const handleNextPage = () => {
      if (currentPage < pageNumbers.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Function to render page numbers with ellipsis
    const renderPages = () => {
      const renderedPages = activePages.map((page, idx) => (
        <PaginationItem
          key={idx}
          className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
        >
          <PaginationLink onClick={() => setCurrentPage(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ));
  
      // Add ellipsis at the start if necessary
      if (activePages[0] > 1) {
        renderedPages.unshift(
          <PaginationEllipsis
            key="ellipsis-start"
            onClick={() => setCurrentPage(activePages[0] - 1)}
          />
        );
      }
  
      // Add ellipsis at the end if necessary
      if (activePages[activePages.length - 1] < pageNumbers.length) {
        renderedPages.push(
          <PaginationEllipsis
            key="ellipsis-end"
            onClick={() =>
              setCurrentPage(activePages[activePages.length - 1] + 1)
            }
          />
        );
      }
  
      return renderedPages;
    };

    return (
        <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>
  
            {renderPages()}
  
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    )
}

export default Markets