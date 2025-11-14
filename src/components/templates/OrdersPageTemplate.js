import OrdersTable from "../organisms/OrdersTable";

const OrdersPageTemplate = ({ ordenes, onView, onDelete }) => (
  <div className="container py-4">
    <h2 className="mb-4 text-primary">Órdenes</h2>
    <OrdersTable ordenes={ordenes} onView={onView} onDelete={onDelete} />
  </div>
);

export default OrdersPageTemplate;
