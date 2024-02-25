import { StatusCodes } from "http-status-codes";
import { productService } from "../services/product.js";

const getAllProduct = async (req, res) => {
  try {
    const products = await productService.getAllProduct();
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: products,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes).json({ Error: "Lỗi server" });
  }
};

const getProductByKey = async (req, res) => {
  try {
    const keySearch = req.query.s;
    const regex = new RegExp(keySearch, "i");
    const { products, productsLength } = await productService.getProductByKey({
      name: regex,
    });
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: products,
      total: productsLength,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes).json({ Error: "Lỗi server" });
  }
};

const getProductByPages = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const startIndex = (page - 1) * perPage;
    const product = await productService.getProductByPages(startIndex, perPage);
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: product,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getProductClub = async (req, res) => {
  try {
    const product = await productService.getProductClub();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getProductNation = async (req, res) => {
  try {
    const product = await productService.getProductNation();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {}
};
const getProductNoLogo = async (req, res) => {
  try {
    const product = await productService.getProductNoLogo();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {}
};

const getProductAccessory = async (req, res) => {
  try {
    const product = await productService.getProductAccessory();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const createProduct = async (req, res) => {
  try {
    const files = req.files;
    const { name, description, price, stockQuality, image, slug, categoryId } =
      req.body;
    const images = files.map((file) => file.path);
    const product = await productService.createProduct({
      name,
      description,
      price,
      stockQuality,
      image: images,
      slug,
      categoryId,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi server" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const { name, description, price, stockQuality, image, slug, categoryId } =
      req.body;
    const images = files.map((file) => file.path);
    const product = await productService.updateProduct(id, {
      name,
      description,
      price,
      stockQuality,
      image: images,
      slug,
      categoryId,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const product = await productService.deleteProduct(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

export const productController = {
  getAllProduct,
  getProductByKey,
  getProductByPages,
  getProductClub,
  getProductNation,
  getProductNoLogo,
  getProductAccessory,
  createProduct,
  updateProduct,
  deleteProduct,
};
