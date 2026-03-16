import React from 'react';

const StructuredData = ({ data }) => {
    return (
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>
    );
};

export default StructuredData;
