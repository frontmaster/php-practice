    const apiResponse = {
    meta: {
        page: 2,
        perPage: 3,
        total: 7,
    },
    data: [
        { id: 4, title: "A", status: "open" },
        { id: 5, title: "B", status: "closed" },
        { id: 6, title: "C", status: "open" },
    ],
    };
    const { page, perPage, total } = apiResponse.meta;
    const lastPage = Math.ceil(total / perPage);

    const list = apiResponse.data
    .filter((res) => {
        return res.status === "open";
    })
    .map((res, index) => {
        return {
        no: (page - 1) * perPage + index + 1,
        id: res.id,
        title: res.title,
        };
    });

    const pagination = {
    currentPage: page,
    lastPage: lastPage,
    hasPrevPage: page > 1,
    hasNextPage: page < lastPage,
    };

    console.log(list);
    console.log(pagination);
