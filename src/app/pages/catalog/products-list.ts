import { ProductPost } from 'src/app/models/product/product-post';
import { ProductView, Image, Spec } from 'src/app/models/product/product-view';

export const productPosts: ProductPost[] = [
	{
		publishId: 1,
		coverUrl: 'https://example.com/image1',
		title: 'Product 1',
		price: 10,
		categories: ['Category A', 'Category B'],
	},
	{
		publishId: 2,
		coverUrl: 'https://example.com/image2',
		title: 'Product 2',
		price: 20,
		categories: ['Category A', 'Category C'],
	},
	{
		publishId: 3,
		coverUrl: 'https://example.com/image3',
		title: 'Product 3',
		price: 30,
		categories: ['Category C'],
	},
	{
		publishId: 4,
		coverUrl: 'https://example.com/image4',
		title: 'Product 4',
		price: 40,
		categories: ['Category A', 'Category C'],
	},
	{
		publishId: 5,
		coverUrl: 'https://example.com/image5',
		title: 'Product 5',
		price: 50,
		categories: ['Category B'],
	},
	{
		publishId: 6,
		coverUrl: 'https://example.com/image6',
		title: 'Product 6',
		price: 60,
		categories: ['Category A', 'Category C'],
	},
	{
		publishId: 7,
		coverUrl: 'https://example.com/image7',
		title: 'Product 7',
		price: 70,
		categories: ['Category A'],
	},
	{
		publishId: 8,
		coverUrl: 'https://example.com/image8',
		title: 'Product 8',
		price: 80,
		categories: ['Category B', 'Category C'],
	},
	{
		publishId: 9,
		coverUrl: 'https://example.com/image9',
		title: 'Product 9',
		price: 90,
		categories: ['Category C'],
	},
	{
		publishId: 10,
		coverUrl: 'https://example.com/image10',
		title: 'Product 10',
		price: 100,
		categories: ['Category A', 'Category B', 'Category C'],
	},
];

const images: Image[] = [
	{
		coverUrl: 'https://example.com/image1.jpg',
		thumbnailUrl: 'https://example.com/thumbnail1.jpg',
	},
	{
		coverUrl: 'https://example.com/image2.jpg',
		thumbnailUrl: 'https://example.com/thumbnail2.jpg',
	},
	{
		coverUrl: 'https://example.com/image2.jpg',
		thumbnailUrl: 'https://example.com/thumbnail2.jpg',
	},
	{
		coverUrl: 'https://example.com/image2.jpg',
		thumbnailUrl: 'https://example.com/thumbnail2.jpg',
	},
];

const specs: Spec[] = [
	{
		name: 'Spec A',
		value: 'Value A',
	},
	{
		name: 'Spec B',
		value: 'Value B',
	},
	{
		name: 'Spec A',
		value: 'Value A',
	},
	{
		name: 'Spec B',
		value: 'Value B',
	},
	{
		name: 'Spec A',
		value: 'Value A',
	},
	{
		name: 'Spec B',
		value: 'Value B',
	},
];

const products: ProductView[] = [
	{
		postId: '1',
		title: 'Product 1',
		price: 10,
		categories: ['category 1'],
		images: images,
		description: 'Product 1 description',
		active: true,
		specs: specs,
	},
	{
		postId: '2',
		title: 'Product 2',
		price: 20,
		categories: ['category 1', 'category 2'],
		images: images,
		description: 'Product 2 description',
		active: true,
		specs: specs,
	},
	{
		postId: '3',
		title: 'Product 3',
		price: 30,
		categories: ['category 2'],
		images: images,
		description: 'Product 3 description',
		active: true,
		specs: specs,
	},
	{
		postId: '4',
		title: 'Product 4',
		price: 40,
		categories: ['category 2', 'category 3'],
		images: images,
		description: 'Product 4 description',
		active: true,
		specs: specs,
	},
	{
		postId: '5',
		title: 'Product 5',
		price: 50,
		categories: ['category 3'],
		images: images,
		description: 'Product 5 description',
		active: true,
		specs: specs,
	},
	{
		postId: '6',
		title: 'Product 6',
		price: 60,
		categories: ['category 4'],
		images: images,
		description: 'Product 6 description',
		active: true,
		specs: specs,
	},
	{
		postId: '7',
		title: 'Product 7',
		price: 70,
		categories: ['category 4', 'category 5'],
		images: images,
		description: 'Product 7 description',
		active: true,
		specs: specs,
	},
	{
		postId: '8',
		title: 'Product 8',
		price: 80,
		categories: ['category 5'],
		images: images,
		description: 'Product 8 description',
		active: true,
		specs: specs,
	},
	{
		postId: '9',
		title: 'Product 9',
		price: 90,
		categories: ['category 5', 'category 6'],
		images: images,
		description: 'Product 9 description',
		active: true,
		specs: specs,
	},
	{
		postId: '10',
		title: 'Product 10',
		price: 100,
		categories: ['category 6'],
		images: images,
		description: 'Product 10 description',
		active: true,
		specs: specs,
	},
];
